import { useEffect, RefObject, useCallback } from 'react';

type EventHandler = (event: MouseEvent | TouchEvent) => void;

function useOnClickOutside(ref: RefObject<HTMLElement>, handler: EventHandler): void {
  const savedHandler = useCallback((event: MouseEvent | TouchEvent): void => {
    if (!ref.current || ref.current.contains(event.target as Node)) {
      return;
    }

    handler(event);
  }, [ref, handler]);

  useEffect(() => {
    const listener = savedHandler;

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [savedHandler]);
}

export { useOnClickOutside };
