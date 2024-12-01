import axios from 'axios';
import { io, Socket } from 'socket.io-client';

class NetworkService {
  private static instance: NetworkService;
  private socket: Socket | null = null;
  private reconnectAttempts = 0;
  private readonly maxReconnectAttempts = 3;
  private readonly reconnectDelay = 1000;
  private isConnecting = false;

  private constructor() {
    this.setupAxiosDefaults();
  }

  static getInstance(): NetworkService {
    if (!NetworkService.instance) {
      NetworkService.instance = new NetworkService();
    }
    return NetworkService.instance;
  }

  private setupAxiosDefaults() {
    axios.defaults.baseURL = import.meta.env.VITE_API_URL;
    axios.defaults.timeout = 10000;
    
    axios.interceptors.response.use(
      response => response,
      error => {
        console.error('Network error:', error);
        return Promise.reject(error);
      }
    );
  }

  async connectSocket(): Promise<void> {
    if (this.socket?.connected || this.isConnecting) {
      return;
    }

    this.isConnecting = true;

    try {
      const socketUrl = import.meta.env.VITE_SOCKET_URL;
      if (!socketUrl) {
        throw new Error('Socket URL not configured');
      }

      this.socket = io(socketUrl, {
        transports: ['websocket'],
        reconnection: true,
        reconnectionAttempts: this.maxReconnectAttempts,
        reconnectionDelay: this.reconnectDelay,
        timeout: 10000
      });

      await new Promise<void>((resolve, reject) => {
        if (!this.socket) return reject(new Error('Socket not initialized'));

        this.socket.on('connect', () => {
          this.reconnectAttempts = 0;
          this.isConnecting = false;
          resolve();
        });

        this.socket.on('connect_error', (error) => {
          console.error('Socket connection error:', error);
          this.reconnectAttempts++;
          
          if (this.reconnectAttempts >= this.maxReconnectAttempts) {
            this.disconnect();
            reject(new Error('Failed to connect after multiple attempts'));
          }
        });

        this.socket.on('disconnect', (reason) => {
          console.log('Socket disconnected:', reason);
          if (reason === 'io server disconnect') {
            this.socket?.connect();
          }
        });

        this.socket.on('error', (error: Error) => {
          console.error('Socket error:', error);
        });
      });
    } catch (error) {
      this.isConnecting = false;
      throw error;
    }
  }

  disconnect(): void {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
    this.isConnecting = false;
    this.reconnectAttempts = 0;
  }

  emit(event: string, data?: any): void {
    if (!this.socket?.connected) {
      throw new Error('Socket not connected');
    }
    this.socket.emit(event, data);
  }

  on(event: string, callback: (...args: any[]) => void): void {
    this.socket?.on(event, callback);
  }

  off(event: string, callback?: (...args: any[]) => void): void {
    this.socket?.off(event, callback);
  }

  isConnected(): boolean {
    return this.socket?.connected || false;
  }
}

export const networkService = NetworkService.getInstance();