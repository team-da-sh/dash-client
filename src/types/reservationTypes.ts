// export interface ReservationCardProps {
//   reservationId: number;
//   lessonName: string;
//   lessonImageUrl: string;
//   lessonGenre: string;
//   lessonLevel: string;
//   lessonLocation: string;
//   lessonStartDateTime: string;
//   lessonEndDateTime: string;
// }

export interface MyPageReservationCardProps {
  lessonId?: number;
  reservationId?: number;
  name: string;
  imageUrl: string;
  genre: string;
  level: string;
  location: string;
  startDateTime: string;
  endDateTime: string;
  dDay: number;
  attendStatus: string;
}

export interface ReservationData {
  reservations: MyPageReservationCardProps[];
}
