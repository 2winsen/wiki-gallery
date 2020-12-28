import { useEffect } from 'react';

export function useOnWindowResize(onResize: () => void, deps: any[]) {
  useEffect(() => {
    function handleResize() {
      onResize();
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}