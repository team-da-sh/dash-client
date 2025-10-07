export interface BankListResponseTypes {
  bankImageUrl: string;
  bankId: number;
  bankName: string;
}

export interface ApiError {
  message: string;
}

export interface TeacherAccountResponseTypes {
  isRegistered: boolean;
  depositor: string;
  bankId: number;
  bankName: string;
  accountNumber: string;
}
