import type { ReservationStatus } from '@/pages/mypage/components/mypageReservation/types/reservationStatus';

export const options = [
  'ALL',
  'PENDING_APPROVAL',
  'APPROVED',
  'PENDING_CANCELLATION',
  'CANCELLED',
  'COMPLETED',
] as const;

export const STATUS_KOREAN_MAP: Record<ReservationStatus, string> = {
  ALL: '전체',
  COMPLETED: '수강완료',
  PENDING_APPROVAL: '승인대기',
  APPROVED: '승인완료',
  PENDING_CANCELLATION: '취소대기',
  CANCELLED: '취소완료',
};

export const STATUS_ENGLISH_MAP = Object.fromEntries(
  Object.entries(STATUS_KOREAN_MAP).map(([key, value]) => [value, key])
) as Record<string, ReservationStatus>;
