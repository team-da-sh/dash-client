export interface ReservationDetailResponseTypes {
  imageUrl: string;
  name: string;
  teacherNickname: string;
  price: number;
  detail: string;
  level: string;
  location: string;
  locationDetail: string;
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
