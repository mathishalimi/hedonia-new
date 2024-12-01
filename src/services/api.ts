import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Auth interceptor
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Handle token refresh or logout
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const authAPI = {
  login: (credentials: { email: string; password: string }) =>
    api.post('/auth/login', credentials),
  
  register: (userData: { email: string; password: string; username: string }) =>
    api.post('/auth/register', userData),
  
  verifyEmail: (token: string) =>
    api.post('/auth/verify-email', { token }),
  
  resetPassword: (email: string) =>
    api.post('/auth/reset-password', { email })
};

export const premiumAPI = {
  createCheckoutSession: () =>
    api.post('/premium/create-checkout'),
  
  verifyPurchase: (sessionId: string) =>
    api.post('/premium/verify', { sessionId }),
  
  getPremiumContent: () =>
    api.get('/premium/content')
};

export const roomAPI = {
  create: (roomData: any) =>
    api.post('/rooms', roomData),
  
  join: (roomCode: string, playerData: any) =>
    api.post(`/rooms/${roomCode}/join`, playerData),
  
  leave: (roomCode: string) =>
    api.post(`/rooms/${roomCode}/leave`),
  
  getState: (roomCode: string) =>
    api.get(`/rooms/${roomCode}/state`)
};

export const chatAPI = {
  getMessages: (roomCode: string) =>
    api.get(`/rooms/${roomCode}/messages`),
  
  sendMessage: (roomCode: string, message: string) =>
    api.post(`/rooms/${roomCode}/messages`, { message })
};

export default api;