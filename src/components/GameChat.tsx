import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameStore } from '../store/gameStore';
import { socketService } from '../services/socket';
import { ChatMessage } from '../types/chat';
import { XMarkIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/solid';

export default function GameChat() {
  const { roomCode, players } = useGameStore();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const { data } = await chatAPI.getMessages(roomCode!);
        setMessages(data);
      } catch (error) {
        console.error('Failed to fetch chat history:', error);
      }
    };

    if (roomCode) {
      fetchHistory();
    }
  }, [roomCode]);

  useEffect(() => {
    socketService.onChatMessage((message: ChatMessage) => {
      setMessages(prev => [...prev, message]);
      if (!isOpen) {
        setUnreadCount(prev => prev + 1);
      }
    });
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
      setUnreadCount(0);
    }
  }, [messages, isOpen]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !roomCode) return;

    try {
      await chatAPI.sendMessage(roomCode, newMessage.trim());
      setNewMessage('');
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-[var(--primary)] text-white p-3 rounded-full shadow-lg hover:opacity-90 transition"
      >
        <ChatBubbleLeftIcon className="h-6 w-6" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 right-4 w-80 bg-white rounded-lg shadow-xl"
          >
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="font-bold text-gray-800">Chat</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>

            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex flex-col ${
                    message.sender === players[0] ? 'items-end' : 'items-start'
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.sender === players[0]
                        ? 'bg-[var(--primary)] text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p className="text-sm font-medium mb-1">{message.sender}</p>
                    <p>{message.content}</p>
                  </div>
                  <span className="text-xs text-gray-500 mt-1">
                    {new Date(message.timestamp).toLocaleTimeString()}
                  </span>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={sendMessage} className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Votre message..."
                  className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                />
                <button
                  type="submit"
                  disabled={!newMessage.trim()}
                  className="bg-[var(--primary)] text-white px-4 py-2 rounded-lg hover:opacity-90 transition disabled:opacity-50"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}