export interface student {
  name: string;
  phoneNumber: string;
  createdAt: string;
}

export interface LessonDetailGetResponse {
  id: number;
  name: string;
  imageUrl: string;
  genre: string;
  level: string;
  location: string;
  detailedAddress: string;
  startDateTime: string;
  endDateTime: string;
  applyStatus: string;
  students: student[];
  studentCount: number;
}
