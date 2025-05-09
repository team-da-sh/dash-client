export interface Reservation {
  id?: number;
  reservationId: number;
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
