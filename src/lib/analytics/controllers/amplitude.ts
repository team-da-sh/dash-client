import { Identify, identify, initAll, reset, setUserId as amplitudeSetUserId, track } from '@amplitude/unified';
import type { UserProperties } from '../events';
import type { EventLoggerController } from '../types';

export const createAmplitudeController = (apiKey: string): EventLoggerController => {
  initAll(apiKey, {
    analytics: {
      autocapture: {
        attribution: true,
        pageViews: true,
        sessions: true,
        formInteractions: false,
        fileDownloads: false,
        elementInteractions: false,
      },
    },
    sessionReplay: { sampleRate: 0.1 },
  });

  return {
    clickEvent(key, ...params) {
      track(key, params[0] ?? {});
    },
    submitEvent(key, ...params) {
      track(key, params[0] ?? {});
    },
    pageViewEvent(key, ...params) {
      track(key, params[0] ?? {});
    },
    impressionEvent(key, ...params) {
      track(key, params[0] ?? {});
    },
    setUserId(userId: number) {
      amplitudeSetUserId(String(userId));
    },
    setUserProperties(properties: UserProperties) {
      const identifyEvent = new Identify();
      for (const [key, value] of Object.entries(properties)) {
        if (value !== undefined && value !== null) {
          identifyEvent.set(key, value as string | number | boolean);
        }
      }
      identify(identifyEvent);
    },
    reset() {
      reset();
    },
  };
};
