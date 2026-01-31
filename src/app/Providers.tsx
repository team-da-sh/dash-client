'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import queryClient from '@/queryClient';

const setScreenSize = () => {
  // vh 관련
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  // window width 관련
  const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const maxWidth = Math.min(375, windowWidth);
  document.documentElement.style.setProperty('--app-max-width', `${maxWidth}px`);
};

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    setScreenSize();
    window.addEventListener('resize', setScreenSize);

    return () => {
      window.removeEventListener('resize', setScreenSize);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
      <Toaster containerStyle={{ margin: '0 auto' }} />
    </QueryClientProvider>
  );
}
