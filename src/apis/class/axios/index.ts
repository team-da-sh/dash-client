// apis/class/axios.ts
import { instance } from '@/apis/api';

export interface LessonDetail {
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
  streetDetailAddress: string;
  oldStreetAddress: string;
  favoriteCount: number;
  bookStatus: boolean;
  status: string;
}

export const getLessonDetail = async (lessonId: string): Promise<LessonDetail> => {
  const response = await instance.get(`/api/v1/lessons/${lessonId}`);
  return response.data;
};
