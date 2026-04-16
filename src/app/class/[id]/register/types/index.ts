export interface ReservationDetailResponseTypes {
  imageUrl: string;
  name: string;
  teacherNickname: string;
  teacherId: number;
  price: number;
  detail: string;
  level: string;
  location: string;
  locationDetail: string;
  maxReservationCount: number;
  lessonRound: {
    lessonRounds: {
      startDateTime: string;
      endDateTime: string;
    }[];
  };
  memberName: string;
  memberPhoneNumber: string;
}

export interface ClassReservationResponseTypes {
  depositor: string;
  bankName: string;
  accountNumber: string;
  price: number;
}
