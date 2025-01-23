export interface Lesson {
  lessonId: number;
  lessonName: string;
  lessonImageUrl: string;
  lessonGenre: string;
  lessonLevel: string;
  lessonLocation: string;
  lessonStartDateTime: string;
  lessonEndDateTime: string;
}

export interface LessonApiResponse {
  lessons: Lesson[];
}
