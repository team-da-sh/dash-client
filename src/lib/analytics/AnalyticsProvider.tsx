'use client';

import { useMemo, type PropsWithChildren } from 'react';
// import { useEffect } from 'react';
// import { useGetMe } from '@/shared/apis/queries';
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

  // TODO-userproperty: GET v1/users/me 백엔드 생성 후 주석 해제
  // const { data: meData } = useGetMe();
  // useEffect(() => {
  //   if (!meData) return;
  //   controller.setUserId(meData.userId);
  //   controller.setUserProperties({
  //     user_type: meData.role,
  //     // TODO-userproperty: v1/users/me 응답에 teacherId 포함 확인 후 활성화
  //     // teacher_id: meData.teacherId,
  //   });
  // }, [controller, meData]);

  return <EventLoggerContext.Provider value={controller}>{children}</EventLoggerContext.Provider>;
};

export default AnalyticsProvider;
