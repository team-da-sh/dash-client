export type StatusType = 'OPEN' | 'EXPIRED' | 'OVER_BOOKED';

export interface LessonDetailApiResponse {
  imageUrl: string;
  genre: string;

  name: string;
  teacherId: number;
  teacherNickname: string;
  teacherImageUrl: string;
  reservationCount: number;
  maxReservationCount: number;

  price: number;
  detail: string;
  recommendation: string;
  level: string;
  remainingDays: number;
  lessonRound: {
    lessonRounds: {
      startDateTime: string;
      endDateTime: string;
    }[];
  };
  location: string;
  streetAddress: string;
  streetDetailAddress?: string;
  oldStreetAddress: string;
  favoriteCount?: number;
  bookStatus: boolean;
  status: StatusType;
}
