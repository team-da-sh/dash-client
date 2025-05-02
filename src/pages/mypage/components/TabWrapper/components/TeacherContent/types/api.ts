export interface LessonDataResponseTypes {
  lessons: lessons[];
}

export interface lessons {
  id: number;
  name: string;
  imageUrl: string;
  genre: string;
  level: string;
  dDay: number;
}
