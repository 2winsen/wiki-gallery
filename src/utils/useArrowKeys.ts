import { useEffect } from 'react';

type KeyboardEventFn = (e: KeyboardEvent) => void

export function useArrowKeys(options: Partial<{ onLeft: KeyboardEventFn, onRight: KeyboardEventFn }>) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      switch (e.key) {
        case 'ArrowLeft':
          options.onLeft && options.onLeft(e);
          break;
        case 'ArrowRight':
          options.onRight && options.onRight(e);
          break;
        default:
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  });
}