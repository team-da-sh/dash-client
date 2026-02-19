'use client';

import clsx from 'clsx';
import { useCallback, useEffect, useRef, useState } from 'react';
import { viewportStyle, trackStyle, slideStyle, paginationStyle, dotStyle, dotActiveStyle } from './carousel.css';

interface CarouselPropTypes<T extends { id: string | number }> {
  slides: T[];
  renderSlide: (slide: T, isPriority: boolean) => React.ReactNode;
  autoplayDelay?: number;
  transitionSpeed?: number;
  swipeThreshold?: number;
}

const Carousel = <T extends { id: string | number }>({
  slides,
  renderSlide,
  autoplayDelay = 4500,
  transitionSpeed = 500,
  swipeThreshold = 50,
}: CarouselPropTypes<T>) => {
  const total = slides.length;
  // 클론: [clone_last, ...원본, clone_first]
  const clonedSlides = [slides[total - 1], ...slides, slides[0]];

  const indexRef = useRef(1);
  const trackRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const startXRef = useRef(0);
  const isDraggingRef = useRef(false);

  const [displayIndex, setDisplayIndex] = useState(0);

  // --- 핵심 유틸 ---

  const applyTransform = useCallback(
    (index: number, animate: boolean) => {
      if (!trackRef.current) return;
      trackRef.current.style.transition = animate ? `transform ${transitionSpeed}ms ease` : 'none';
      trackRef.current.style.transform = `translateX(${-index * 100}%)`;
    },
    [transitionSpeed]
  );

  const toDisplayIndex = useCallback((i: number) => (i <= 0 ? total - 1 : i > total ? 0 : i - 1), [total]);

  const snapToReal = useCallback(() => {
    const current = indexRef.current;
    if (current === 0) {
      indexRef.current = total;
      applyTransform(total, false);
    } else if (current === total + 1) {
      indexRef.current = 1;
      applyTransform(1, false);
    }
  }, [total, applyTransform]);

  // --- Autoplay ---

  const scheduleAutoplay = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      const next = indexRef.current + 1;
      indexRef.current = next;
      setDisplayIndex(toDisplayIndex(next));
      applyTransform(next, true);
    }, autoplayDelay);
  }, [autoplayDelay, applyTransform, toDisplayIndex]);

  const cancelAutoplay = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  // --- Transition end ---

  const handleTrackTransitionEnd = useCallback(
    (e: React.TransitionEvent) => {
      if (e.target !== trackRef.current) return;
      snapToReal();
      scheduleAutoplay();
    },
    [snapToReal, scheduleAutoplay]
  );

  // --- 슬라이드 이동 ---

  const slideTo = useCallback(
    (nextIndex: number) => {
      indexRef.current = nextIndex;
      setDisplayIndex(toDisplayIndex(nextIndex));
      applyTransform(nextIndex, true);
    },
    [applyTransform, toDisplayIndex]
  );

  // --- 드래그 ---

  const resolveSwipe = useCallback(
    (delta: number) => {
      const current = indexRef.current;
      if (delta > swipeThreshold) slideTo(current + 1);
      else if (delta < -swipeThreshold) slideTo(current - 1);
      else slideTo(current);
    },
    [swipeThreshold, slideTo]
  );

  const handleDragStart = useCallback(
    (clientX: number) => {
      cancelAutoplay();

      // transition 도중 드래그 시작하면 현재 위치에서 즉시 정지
      if (trackRef.current) {
        const computed = getComputedStyle(trackRef.current);
        const matrix = new DOMMatrixReadOnly(computed.transform);
        const currentPx = matrix.m41;
        const viewportWidth = trackRef.current.offsetWidth;
        // 현재 px 위치에서 가장 가까운 슬라이드 인덱스로 snap
        const nearestIndex = Math.round(-currentPx / viewportWidth);
        indexRef.current = nearestIndex;
        trackRef.current.style.transition = 'none';
        trackRef.current.style.transform = `translateX(${-nearestIndex * 100}%)`;
        setDisplayIndex(toDisplayIndex(nearestIndex));
        // 클론이면 실제 위치로 순간이동
        snapToReal();
      }

      isDraggingRef.current = true;
      startXRef.current = clientX;
    },
    [cancelAutoplay, snapToReal, toDisplayIndex]
  );

  const handleDragMove = useCallback((clientX: number) => {
    if (!trackRef.current || !isDraggingRef.current) return;
    const diffPx = clientX - startXRef.current;
    const width = trackRef.current.offsetWidth;
    const diffPercent = (diffPx / width) * 100;
    const base = -indexRef.current * 100;
    trackRef.current.style.transition = 'none';
    trackRef.current.style.transform = `translateX(${base + diffPercent}%)`;
  }, []);

  const handleDragEnd = useCallback(
    (clientX: number) => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      const delta = startXRef.current - clientX;
      resolveSwipe(delta);
    },
    [resolveSwipe]
  );

  // --- 이벤트 핸들러 ---

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => handleDragStart(e.touches[0].clientX),
    [handleDragStart]
  );
  const handleTouchMove = useCallback((e: React.TouchEvent) => handleDragMove(e.touches[0].clientX), [handleDragMove]);
  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => handleDragEnd(e.changedTouches[0].clientX),
    [handleDragEnd]
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      handleDragStart(e.clientX);
      e.preventDefault();
    },
    [handleDragStart]
  );
  const handleMouseMove = useCallback((e: React.MouseEvent) => handleDragMove(e.clientX), [handleDragMove]);
  const handleMouseUp = useCallback((e: React.MouseEvent) => handleDragEnd(e.clientX), [handleDragEnd]);
  const handleMouseLeave = useCallback(() => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    slideTo(indexRef.current);
  }, [slideTo]);

  // --- 초기화 ---

  useEffect(() => {
    scheduleAutoplay();
    return cancelAutoplay;
  }, [scheduleAutoplay, cancelAutoplay]);

  return (
    <div className={viewportStyle}>
      <div
        role="presentation"
        ref={trackRef}
        className={trackStyle}
        style={{ transform: 'translateX(-100%)' }}
        onTransitionEnd={handleTrackTransitionEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}>
        {clonedSlides.map((slide, index) => (
          <div key={`slide-${index}`} className={slideStyle}>
            {renderSlide(slide, index === 1)}
          </div>
        ))}
      </div>

      <div className={paginationStyle} role="tablist" aria-label="슬라이드 탐색">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            role="tab"
            aria-selected={displayIndex === index}
            aria-label={`${index + 1}번 슬라이드로 이동`}
            className={clsx(dotStyle, displayIndex === index && dotActiveStyle)}
            onClick={() => {
              cancelAutoplay();
              slideTo(index + 1);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
