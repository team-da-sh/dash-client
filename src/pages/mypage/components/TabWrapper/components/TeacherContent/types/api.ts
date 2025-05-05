export interface LessonDataResponseTypes {
  lessons: lessonResponseTypes[];
}

export interface lessonResponseTypes {
  id: number;
  name: string;
  imageUrl: string;
  genre: string;
  level: string;
  dDay: number;
}
