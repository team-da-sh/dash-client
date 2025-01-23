export interface Lesson {
  id: number;
  name: string;
  imageUrl: string;
  genre: string;
  level: string;
  location: string;
  detailedAddress: string;
  startDateTime: string;
  endDateTime: string;
  applyStatus: [];
}

export interface LessonApiResponse {
  count: number;
  lessons: Lesson[];
}
