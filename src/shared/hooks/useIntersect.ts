import type { MutableRefObject } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';

export const useIntersect = (initialVisible: boolean, options?: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(initialVisible);

  const callback = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      setIsVisible(!entry.isIntersecting);
    });
  }, []);

  useEffect(() => {
    if (!ref.current) return;

    // 이미지 영역에서 헤더 높이를 제외한 비율값
    const threshold = 1 - (ref.current?.offsetHeight - 60) / ref.current?.offsetHeight;

    const observer = new IntersectionObserver(callback, { ...options, threshold: threshold });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options, callback]);

  return [ref, isVisible] as [MutableRefObject<HTMLDivElement | null>, boolean];
};
