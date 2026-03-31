'use client';

import { useMemo, type PropsWithChildren } from 'react';
import { EventLoggerContext } from './context';
import { createAmplitudeController } from './controllers/amplitude';
import { createConsoleController } from './controllers/console';

const AnalyticsProvider = ({ children }: PropsWithChildren) => {
  const controller = useMemo(() => {
    if (typeof window === 'undefined') {
      return createConsoleController();
    }

    const apiKey = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY;
    const isDev = process.env.NODE_ENV !== 'production';

    if (isDev || !apiKey) {
      return createConsoleController();
    }

    try {
      return createAmplitudeController(apiKey);
    } catch (error) {
      console.error('[Analytics] Amplitude 초기화 실패, console fallback으로 전환합니다.', error);
      return createConsoleController();
    }
  }, []);

  return <EventLoggerContext.Provider value={controller}>{children}</EventLoggerContext.Provider>;
};

export default AnalyticsProvider;
