'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import queryClient from '@/app/queryClient';
import ModalProvider from '@/common/components/Modal/ModalProvider';
import { AnalyticsProvider } from '@/lib/analytics';

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
      {/* TODO-userproperty: AnalyticsProvider가 useGetMe(React Query)를 사용하므로 QueryClientProvider 안에 위치해야 함 */}
      <AnalyticsProvider>
        {children}
        <ModalProvider />
        <Toaster containerStyle={{ margin: '0 auto' }} />
      </AnalyticsProvider>
    </QueryClientProvider>
  );
}
