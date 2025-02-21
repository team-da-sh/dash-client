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

// 날짜를 YYYY년 MM월 DD일 HH시 MM분 SS초로 변환하는 함수
export const formatDateTime = (dateString: string): string => {
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
