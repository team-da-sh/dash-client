import type { EventLoggerController } from '../types';

export const createConsoleController = (): EventLoggerController => ({
  clickEvent(key, ...params) {
    console.log('[Analytics:click]', key, ...params);
  },
  submitEvent(key, ...params) {
    console.log('[Analytics:submit]', key, ...params);
  },
  pageViewEvent(key, ...params) {
    console.log('[Analytics:pageview]', key, ...params);
  },
  impressionEvent(key, ...params) {
    console.log('[Analytics:impression]', key, ...params);
  },
  setUserProperties(properties) {
    console.log('[Analytics:identify]', properties);
  },
  reset() {
    console.log('[Analytics:reset]');
  },
});
