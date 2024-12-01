import { useEffect, useRef, useCallback } from 'react';

interface TimeoutHandle {
  id: NodeJS.Timeout;
  callback: () => void;
}

const timeouts = new Set<TimeoutHandle>();

export function useTimeout(callback: () => void, delay: number | null) {
  const timeoutRef = useRef<TimeoutHandle>();
  const callbackRef = useRef(callback);

  // Update callback ref when callback changes
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  // Setup and cleanup timeout
  useEffect(() => {
    if (delay === null) return;

    const handle: TimeoutHandle = {
      id: setTimeout(() => {
        if (callbackRef.current) {
          callbackRef.current();
        }
        timeouts.delete(handle);
      }, delay),
      callback: callbackRef.current
    };

    timeoutRef.current = handle;
    timeouts.add(handle);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current.id);
        timeouts.delete(timeoutRef.current);
      }
    };
  }, [delay]);

  // Provide a way to clear timeout manually
  const clear = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current.id);
      timeouts.delete(timeoutRef.current);
    }
  }, []);

  return clear;
}

export function clearAllTimeouts() {
  timeouts.forEach(handle => {
    clearTimeout(handle.id);
  });
  timeouts.clear();
}

// Simpler version for one-off timeouts
export function useTimeoutWithCleanup(callback: () => void, delay: number | null) {
  useEffect(() => {
    if (delay === null) return;
    
    const handle: TimeoutHandle = {
      id: setTimeout(callback, delay),
      callback
    };
    
    timeouts.add(handle);
    
    return () => {
      clearTimeout(handle.id);
      timeouts.delete(handle);
    };
  }, [callback, delay]);
}