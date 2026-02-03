export type ReservationStatus =
  | 'ALL'
  | 'PENDING_APPROVAL'
  | 'APPROVED'
  | 'PENDING_CANCELLATION'
  | 'CANCELLED'
  | 'COMPLETED';

export type ProgressStatus = 'IN_PROGRESS' | 'COMPLETED';
