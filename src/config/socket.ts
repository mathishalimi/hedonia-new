export const SOCKET_EVENTS = {
  CONNECT: 'connect',
  DISCONNECT: 'disconnect',
  ROOM_JOIN: 'room:join',
  ROOM_LEAVE: 'room:leave',
  GAME_START: 'game:start',
  GAME_ACTION: 'game:action',
  CHAT_MESSAGE: 'chat:message',
  PLAYER_READY: 'player:ready',
  ERROR: 'error'
} as const;

export const SOCKET_OPTIONS = {
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
  timeout: 10000
} as const;