export interface ReservationDetailResponse {
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
  studentName: string;
  studentPhoneNumber: string;
}
