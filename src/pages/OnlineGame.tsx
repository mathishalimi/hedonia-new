import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useGameStore } from '../store/gameStore';
import { socketService } from '../services/socket';
import WaitingRoom from '../components/WaitingRoom';
import OnlineGameUI from '../components/OnlineGameUI';
import ReconnectingOverlay from '../components/ReconnectingOverlay';

export default function OnlineGame() {
  const navigate = useNavigate();
  const { roomCode, gameStarted } = useGameStore();
  const [isConnecting, setIsConnecting] = useState(true);
  const [isReconnecting, setIsReconnecting] = useState(false);

  useEffect(() => {
    if (!roomCode) {
      navigate('/');
      return;
    }

    socketService.connect();
    
    socketService.socket?.on('connect', () => {
      setIsConnecting(false);
      setIsReconnecting(false);
    });

    socketService.socket?.on('disconnect', () => {
      setIsReconnecting(true);
    });

    socketService.onError((error) => {
      console.error('Socket error:', error);
      navigate('/');
    });

    return () => {
      socketService.disconnect();
    };
  }, [roomCode, navigate]);

  if (isConnecting) {
    return (
      <div className="min-h-screen bg-[var(--background)] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-white text-center"
        >
          <div className="animate-spin h-8 w-8 border-2 border-white border-t-transparent rounded-full mx-auto mb-4" />
          <p>Connexion en cours...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {isReconnecting && <ReconnectingOverlay />}
      {gameStarted ? <OnlineGameUI /> : <WaitingRoom />}
    </div>
  );
}