export class NetworkError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'NetworkError';
  }
}

export class SocketError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'SocketError';
  }
}

export function handleError(error: unknown): string {
  if (error instanceof NetworkError || error instanceof SocketError) {
    return error.message;
  }
  
  if (error instanceof Error) {
    return 'Une erreur est survenue. Veuillez réessayer.';
  }
  
  return 'Une erreur inattendue est survenue.';
}