export interface ReservationDetailApiResponse {
  imageUrl: string;
  name: string;
  teacherNickname: string;
  price: number;
  detail: string;
  level: string;
  location: string;
  locationDetail: string;
  lessonRound: {
    lessonRounds: {
      startDateTime: string;
      endDateTime: string;
    }[];
  };
  studentName: string;
  studentPhoneNumber: string;
}

export interface LessonRoundProps {
  startDateTime: string;
  endDateTime: string;
}

export interface TopInfoContentProps {
  name: string;
  teacherNickname: string;
  imageUrl: string;
}

export interface InfoRowProps {
  label: string;
  value: string;
}

export interface ClassInfoProps {
  name: string;
  location: string;
  locationDetail?: string;
  teacherNickname: string;
  level: string;
  lessonRound?: LessonRoundProps[];
}

export interface ScheduleItemProps {
  index: number;
  startDateTime: string;
  endDateTime: string;
}

export interface ApplicantInfoProps {
  studentName: string;
  studentPhoneNumber: string;
}

export interface AgreeCheckBoxProps {
  text: string;
  isChecked: boolean;
  onToggle: () => void;
  link?: string;
}