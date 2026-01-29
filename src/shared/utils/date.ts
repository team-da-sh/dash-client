// 시간을 계산, "익일" 여부를 판단
export const calculatePeriod = (start: string, end: string) => {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const startTime = `${startDate.getHours().toString().padStart(2, '0')}:${startDate
    .getMinutes()
    .toString()
    .padStart(2, '0')}`;
  const endTime = `${endDate.getHours().toString().padStart(2, '0')}:${endDate
    .getMinutes()
    .toString()
    .padStart(2, '0')}`;

  const isNextDay = endDate.getDate() !== startDate.getDate();
  const formattedEndTime = isNextDay ? `익일 ${endTime}` : endTime;

  const totalMinutes = Math.abs(endDate.getTime() - startDate.getTime()) / 1000 / 60;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = Math.ceil(totalMinutes % 60);

  const durationString = minutes > 0 ? `총 ${hours}시간 ${minutes}분` : `총 ${hours}시간`;

  return { startTime, formattedEndTime, durationString };
};

// 날짜를 포맷팅 (ex. "2025년 1월 8일 수요일")
export const formatDateToKR = (dateString: string) => {
  const date = new Date(dateString);
  const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ${days[date.getDay()]}`;
};

// 날짜를 간단하게 포맷팅 (ex. "2025년 1월 8일 (수)")
export const formatDateToSimpleKR = (dateString: string) => {
  const date = new Date(dateString);
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 (${days[date.getDay()]})`;
};

// 현재를 기준으로 마감이 언젠지 계산
export const calculateRemainingDate = (startDate: string, remainingDays: number) => {
  if (remainingDays > 0) {
    return `마감 D-${remainingDays}`;
  }

  const startTime = new Date(startDate);
  const currentTime = new Date();

  return startTime < currentTime ? '마감' : 'D-Day';
};

// 날짜 차이 계산
export const getDateDiff = (date: string) => {
  const date1 = new Date();
  const date2 = new Date(date);

  date1.setHours(0, 0, 0, 0);
  date2.setHours(0, 0, 0, 0);

  const diffDate = date1.getTime() - date2.getTime();

  return Math.abs(diffDate / (1000 * 60 * 60 * 24));
};

export type ClassStatus = 'ongoing' | 'upcoming' | 'completed';

// 레슨 시작, 끝 시간과 현재 시간을 비교해서 클래스/레슨의 상태를 계산하는 함수
export const getClassStatus = (
  lessonStartDateTime: string | undefined,
  lessonEndDateTime: string | undefined
): { status: ClassStatus; remainingDays?: number } => {
  if (!lessonStartDateTime || !lessonEndDateTime) {
    // 날짜가 제공되지 않으면 기본 상태 반환
    return { status: 'completed' };
  }

  const currentTime = new Date();
  const startTime = new Date(lessonStartDateTime);
  const endTime = new Date(lessonEndDateTime);

  // 유효하지 않은 날짜를 방어
  if (isNaN(startTime.getTime()) || isNaN(endTime.getTime())) {
    throw new Error('Invalid date format provided for lessonStartDateTime or lessonEndDateTime');
  }

  // 날짜만 비교하기 위해 시간, 분, 초, 밀리초를 0으로 초기화
  currentTime.setHours(0, 0, 0, 0);
  startTime.setHours(0, 0, 0, 0);
  endTime.setHours(0, 0, 0, 0);

  if (currentTime < startTime) {
    // 수강 예정 상태
    const remainingDays = Math.ceil((startTime.getTime() - currentTime.getTime()) / (1000 * 60 * 60 * 24));
    return { status: 'upcoming', remainingDays };
  }

  if (currentTime >= startTime && currentTime <= endTime) {
    // 수강 중 상태
    return { status: 'ongoing' };
  }

  // 수강 완료 상태
  return { status: 'completed' };
};

// 날짜를 YYYY년 MM월 DD일 형식으로 변환하는 함수
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}년 ${month}월 ${day}일`;
};

// 날짜를 YYYY-MM-DD로 변환하는 함수
export const formatToYYYYMMDD = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// 날짜를 YYYY년 MM월 DD일 HH시 MM분 SS초로 변환하는 함수
export const formatDateToKRWithTime = (dateString: string): string => {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = date.getMonth() + 1; // 월은 0부터 시작하므로 +1
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  // 'YYYY년 MM월 DD일 HH시 mm분 ss초' 형식으로 반환
  return `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분 ${seconds}초`;
};

// 날짜를 받아서 ~~년 월 일 - ~~년 월 일로 반환하는 함수
export const formatLessonDateRange = (lessonStartDateTime: string, lessonEndDateTime: string): string => {
  const startFormatted = formatDate(lessonStartDateTime);
  const endFormatted = formatDate(lessonEndDateTime);

  return `${startFormatted} - ${endFormatted}`;
};

// 시간 관련 상수
export const HOURS_IN_HALF_DAY = 12;
export const MINUTES_IN_HALF_HOUR = 30;
export const FIRST_HOUR = 1;

// 시간 증가
export const increaseHour = (currentHour: number): number =>
  currentHour === HOURS_IN_HALF_DAY ? FIRST_HOUR : currentHour + 1;

// 시간 감소
export const decreaseHour = (currentHour: number): number =>
  currentHour === FIRST_HOUR ? HOURS_IN_HALF_DAY : currentHour - 1;

// 분 증가 (30분 단위)
export const increaseMinute = ({
  currentMinute,
  setHour,
}: {
  currentMinute: number;
  setHour: React.Dispatch<React.SetStateAction<number>>;
}): number => {
  if (currentMinute === 0) {
    return MINUTES_IN_HALF_HOUR;
  } else if (currentMinute === MINUTES_IN_HALF_HOUR) {
    setHour((prevHour) => (prevHour === HOURS_IN_HALF_DAY ? FIRST_HOUR : prevHour + 1));
    return 0;
  }
  return currentMinute;
};

// 분 감소 (30분 단위)
export const decreaseMinute = ({
  currentMinute,
  setHour,
}: {
  currentMinute: number;
  setHour: React.Dispatch<React.SetStateAction<number>>;
}): number => {
  if (currentMinute === MINUTES_IN_HALF_HOUR) {
    return 0;
  } else if (currentMinute === 0) {
    setHour((prevHour) => (prevHour === FIRST_HOUR ? HOURS_IN_HALF_DAY : prevHour - 1));
    return MINUTES_IN_HALF_HOUR;
  }
  return currentMinute;
};

// AM/PM 토글
export const toggleAmpm = (currentAmpm: string): string => (currentAmpm === 'AM' ? 'PM' : 'AM');

// 날짜에서 시간 정보를 제거 (00:00:00으로 설정)
export const getDateWithoutTime = (date: Date): Date => {
  const newDate = new Date(date);
  newDate.setHours(0, 0, 0, 0);
  return newDate;
};

// 12시간 형식에서 24시간 형식으로 변환
export const convertTo24HourFormat = (hour: number, ampm: string): number => {
  if (ampm === 'PM' && hour !== HOURS_IN_HALF_DAY) {
    return hour + HOURS_IN_HALF_DAY;
  } else if (ampm === 'AM' && hour === HOURS_IN_HALF_DAY) {
    return 0;
  }
  return hour;
};

// 시간과 분을 분 단위로 변환
export const convertToMinutes = (hour: number, minute: number, ampm: string): number => {
  const hour24 = convertTo24HourFormat(hour, ampm);
  return hour24 * 60 + minute;
};

// 시간 간격(분)이 겹치는지 확인
export const isTimeOverlapping = (startTime1: Date, endTime1: Date, startTime2: Date, endTime2: Date): boolean => {
  return startTime1 < endTime2 && endTime1 > startTime2;
};

// return 형식: 12:00 AM
export const formatTimeDisplay = (hour: number, minute: number, ampm: string): string => {
  return `${hour}:${minute === 0 ? '00' : minute} ${ampm}`;
};

export const formatToISOString = (date: string, hour: number, minute: number, ampm: string, selectedTime: number) => {
  let adjustedHour = hour;
  if (ampm === 'PM' && hour !== HOURS_IN_HALF_DAY) {
    adjustedHour += HOURS_IN_HALF_DAY;
  } else if (ampm === 'AM' && hour === HOURS_IN_HALF_DAY) {
    adjustedHour = 0;
  }

  const startDate = new Date(date);
  startDate.setHours(adjustedHour, minute, 0, 0);

  const durationInMinutes = selectedTime * 60;

  const endDate = new Date(startDate);
  endDate.setMinutes(startDate.getMinutes() + durationInMinutes);

  // 날짜를 직접 변환하여 Z를 붙이지 않도록
  const formatTime = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const milliseconds = String(date.getMilliseconds()).padStart(3, '0');

    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}`;
  };

  return {
    startTime: formatTime(startDate),
    endTime: formatTime(endDate),
  };
};

export const formatDuration = (duration: number) => {
  const hours = Math.floor(duration);
  const minutes = Math.round((duration - hours) * 60);

  return minutes === 0 ? `총 ${hours}시간` : `총 ${hours}시간 ${minutes}분`;
};
