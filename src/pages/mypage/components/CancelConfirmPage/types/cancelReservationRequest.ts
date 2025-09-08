export interface CancelReservationRequest {
  deposited: boolean;
  bankId?: number;
  bankName?: string;
  accountNumber?: string;
}
