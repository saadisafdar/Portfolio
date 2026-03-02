import { useEffect, useRef } from 'react';

export function useEventListener(eventType, callback, element = window) {
  const callbackRef = useRef(callback);

  // Update callback ref if callback changes
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    // Make sure element supports addEventListener
    if (element == null) return;
    
    const handler = (e) => callbackRef.current(e);
    
    element.addEventListener(eventType, handler);

    // Cleanup: remove event listener
    return () => {
      element.removeEventListener(eventType, handler);
    };
  }, [eventType, element]);
}