export interface LessonCountResponseTypes {
  beforeLessonCount: number;
  duringLessonCount: number;
  afterLessonCount: number;
}

export interface MyPageResponseTypes {
  profileImageUrl: string;
  nickname: string;
  name: string;
  phoneNumber: string;
}

export interface MyTeacherInfoResponseTypes {
  profileImage: string;
  nickname: string;
  instagram: string;
  youtube: string;
}

export interface lessons {
  id: number;
  name: string;
  imageUrl: string;
  genre: string;
  level: string;
  dDay: number;
}

export interface LessonThumbnailsResponseTypes {
  lessons: lessons[];
}
