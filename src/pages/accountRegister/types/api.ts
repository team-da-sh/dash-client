export interface TeacherAccountResponseTypes {
  isRegistered: boolean;
  depositor: string;
  bankId: number;
  bankName: string;
  accountNumber: string;
}

export interface TeacherAccountRequestTypes {
  depositor: string;
  bankId: number;
  bankName: string;
  accountNumber: string;
}
