import type { ClickEvents, ImpressionEvents, PageViewEvents, SubmitEvents, UserProperties } from './events';

// undefined면 파라미터 없이 호출, 아니면 params 필수
export type ParamTuple<T> = T extends undefined ? [] : [params: T];

export interface EventLoggerController {
  clickEvent<K extends keyof ClickEvents>(key: K, ...params: ParamTuple<ClickEvents[K]>): void;
  submitEvent<K extends keyof SubmitEvents>(key: K, ...params: ParamTuple<SubmitEvents[K]>): void;
  pageViewEvent<K extends keyof PageViewEvents>(key: K, ...params: ParamTuple<PageViewEvents[K]>): void;
  impressionEvent<K extends keyof ImpressionEvents>(key: K, ...params: ParamTuple<ImpressionEvents[K]>): void;
  setUserId: (userId: number) => void;
  setUserProperties: (properties: UserProperties) => void;
  reset: () => void;
}
