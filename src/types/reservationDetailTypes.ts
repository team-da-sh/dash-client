// 클래스 신청 내역 상세 반환
export interface ReservationDetailType {
  dDay: number;
  lessonName: string;
  nickname: string;
  rounds: RoundType[];
  location: string;
  detailedAddress: string;
  level: string;
  name: string;
  phoneNumber: string;
  reservationDateTime: string;
}

export interface RoundType {
  startDateTime: string;
  endDateTime: string;
}
