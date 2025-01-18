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
  const minutes = totalMinutes % 60;

  const durationString = minutes > 0 ? `총 ${hours}시간 ${minutes}분` : `총 ${hours}시간`;

  return { startTime, formattedEndTime, durationString };
};

// 날짜를 포맷팅 (ex. "2025년 1월 8일 수요일")
export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ${days[date.getDay()]}`;
};

export const formatSimpleDate = (dateString: string) => {
  const date = new Date(dateString);
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 (${days[date.getDay()]})`;
};

// D-day 계산
export const calculateDday = (startDateTime: string): string => {
  const today = new Date();
  const startDate = new Date(startDateTime);

  today.setHours(0, 0, 0, 0);
  startDate.setHours(0, 0, 0, 0);

  const difference = Math.ceil((startDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  return difference > 0 ? `D-${difference}` : difference === 0 ? 'D-Day' : '마감';
};

// 현재 날짜 기준으로 특정 날짜가 4일 이하로 남았는지 확인하는 함수
export const isWithinFourDays = (startDateTime: string): { isWithin: boolean; isPast: boolean } => {
  const now = new Date(); // 현재 날짜 및 시간
  const startDate = new Date(startDateTime); // 클래스 시작 날짜

  const differenceInMs = startDate.getTime() - now.getTime(); // 밀리초 차이 계산
  const oneDayInMs = 1000 * 60 * 60 * 24; // 하루를 밀리초로 환산

  return {
    isWithin: differenceInMs > 0 && differenceInMs <= 4 * oneDayInMs, // 4일 이하인지 확인
    isPast: differenceInMs <= 0, // 마감 여부 확인
  };
};

