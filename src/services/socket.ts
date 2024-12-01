import { io, Socket } from 'socket.io-client';
import { ChatMessage } from '../types/chat';

class SocketService {
  private socket: Socket | null = null;
  private reconnectAttempts = 0;
  private readonly maxReconnectAttempts = 3;

  async connect(roomCode: string, token: string) {
    if (this.socket?.connected) return;

    this.socket = io(import.meta.env.VITE_SOCKET_URL, {
      auth: { token },
      query: { roomCode }
    });

    this.setupEventListeners();
  }

  private setupEventListeners() {
    if (!this.socket) return;

    this.socket.on('connect_error', (error) => {
      console.error('Socket connection error:', error);
      this.handleReconnect();
    });

    this.socket.on('disconnect', (reason) => {
      console.log('Socket disconnected:', reason);
      if (reason === 'io server disconnect') {
        this.socket?.connect();
      }
    });
  }

  private handleReconnect() {
    this.reconnectAttempts++;
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      setTimeout(() => {
        this.socket?.connect();
      }, 1000 * this.reconnectAttempts);
    }
  }

  // Room events
  onPlayerJoined(callback: (player: any) => void) {
    this.socket?.on('player:joined', callback);
  }

  onPlayerLeft(callback: (player: any) => void) {
    this.socket?.on('player:left', callback);
  }

  onGameStateUpdate(callback: (state: any) => void) {
    this.socket?.on('game:state', callback);
  }

  // Chat events
  sendMessage(message: string) {
    this.socket?.emit('chat:message', message);
  }

  onChatMessage(callback: (message: ChatMessage) => void) {
    this.socket?.on('chat:message', callback);
  }

  // Game actions
  emitGameAction(action: string, data: any) {
    this.socket?.emit('game:action', { action, data });
  }

  disconnect() {
    this.socket?.disconnect();
    this.socket = null;
    this.reconnectAttempts = 0;
  }
}

export const socketService = new SocketService();