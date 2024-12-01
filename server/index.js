import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import compression from 'compression';

dotenv.config();

const app = express();
const server = createServer(app);

// Security middleware
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false
}));
app.use(compression());

// Configure CORS with specific origin
const corsOrigin = process.env.NODE_ENV === 'production' 
  ? process.env.CLIENT_URL
  : ['http://localhost:5173', 'http://localhost:4173'];

app.use(cors({
  origin: corsOrigin,
  methods: ['GET', 'POST'],
  credentials: true,
  optionsSuccessStatus: 200
}));

app.use(express.json());

// Initialize Socket.IO with CORS and proper configuration
const io = new Server(server, {
  cors: {
    origin: corsOrigin,
    methods: ['GET', 'POST'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
  },
  transports: ['websocket', 'polling'],
  pingTimeout: 60000,
  pingInterval: 25000,
  path: '/socket.io'
});

// Store active rooms
const rooms = new Map();

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Debug endpoint to check environment
app.get('/debug', (req, res) => {
  res.json({
    nodeEnv: process.env.NODE_ENV,
    corsOrigin,
    port: process.env.PORT
  });
});

// Socket.IO connection handling with error handling
io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);

  socket.on('error', (error) => {
    console.error('Socket error:', error);
  });

  socket.on('createRoom', ({ playerName }) => {
    try {
      const roomCode = Math.random().toString(36).substring(2, 8).toUpperCase();
      
      rooms.set(roomCode, {
        host: socket.id,
        players: [{ id: socket.id, name: playerName }],
        gameState: null,
        lastActivity: Date.now()
      });

      socket.join(roomCode);
      socket.data.name = playerName;
      socket.data.room = roomCode;
      
      io.to(roomCode).emit('roomCreated', {
        roomCode,
        players: rooms.get(roomCode).players
      });

      console.log(`Room ${roomCode} created by ${playerName}`);
    } catch (error) {
      console.error('Error creating room:', error);
      socket.emit('error', 'Failed to create room');
    }
  });

  socket.on('joinRoom', ({ roomCode, playerName }) => {
    try {
      console.log(`${playerName} attempting to join room ${roomCode}`);
      const room = rooms.get(roomCode);
      
      if (!room) {
        socket.emit('error', 'Room not found');
        return;
      }

      if (room.players.length >= 8) {
        socket.emit('error', 'Room is full');
        return;
      }

      socket.join(roomCode);
      socket.data.name = playerName;
      socket.data.room = roomCode;

      room.players.push({ id: socket.id, name: playerName });
      room.lastActivity = Date.now();
      
      io.to(roomCode).emit('playerJoined', room.players);
      console.log(`${playerName} joined room ${roomCode}`);
    } catch (error) {
      console.error('Error joining room:', error);
      socket.emit('error', 'Failed to join room');
    }
  });

  socket.on('startGame', (roomCode) => {
    try {
      const room = rooms.get(roomCode);
      if (room && socket.id === room.host) {
        io.to(roomCode).emit('gameStarted', room);
        console.log(`Game started in room ${roomCode}`);
      }
    } catch (error) {
      console.error('Error starting game:', error);
      socket.emit('error', 'Failed to start game');
    }
  });

  socket.on('disconnect', () => {
    try {
      const roomCode = socket.data.room;
      if (roomCode && rooms.has(roomCode)) {
        const room = rooms.get(roomCode);
        
        room.players = room.players.filter(p => p.id !== socket.id);
        room.lastActivity = Date.now();
        
        if (room.players.length === 0) {
          rooms.delete(roomCode);
          console.log(`Room ${roomCode} deleted - no players remaining`);
        } else if (socket.id === room.host) {
          room.host = room.players[0].id;
          console.log(`New host assigned in room ${roomCode}`);
        }
        
        io.to(roomCode).emit('playerLeft', room.players);
        console.log(`Player ${socket.data.name} left room ${roomCode}`);
      }
    } catch (error) {
      console.error('Error handling disconnect:', error);
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({
    error: true,
    message: process.env.NODE_ENV === 'production' 
      ? 'Internal server error' 
      : err.message
  });
});

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('CORS origin:', corsOrigin);
});