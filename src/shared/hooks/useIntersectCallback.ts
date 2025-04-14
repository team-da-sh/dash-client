import { useCallback, useState } from 'react';

export const useIntersectCallback = (initialVisible: boolean, options?: IntersectionObserverInit) => {
  const [isVisible, setIsVisible] = useState(initialVisible);

  const callback = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      setIsVisible(!entry.isIntersecting);
    });
  }, []);

  const ref = useCallback(
    (node: HTMLDivElement | null) => {
      if (!node) return;
      if (node) {
        const threshold = 1 - (node.offsetHeight - 60) / node.offsetHeight;
        const observer = new IntersectionObserver(callback, { ...options, threshold });
        observer.observe(node);
      }
    },
    [callback, options]
  );

  return [ref, isVisible] as const;
};
