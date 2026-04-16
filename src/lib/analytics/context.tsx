'use client';

import { createContext } from 'react';
import type { EventLoggerController } from './types';

export const EventLoggerContext = createContext<EventLoggerController>(createUninitializedController());

function createUninitializedController(): EventLoggerController {
  return new Proxy({} as EventLoggerController, {
    get() {
      throw new Error('EventLoggerController가 초기화되지 않았습니다. AnalyticsProvider로 감싸져 있는지 확인하세요.');
    },
  });
}
