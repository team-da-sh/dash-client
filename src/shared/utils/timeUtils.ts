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

// 시간을 읽기 쉬운 형식으로 포맷팅
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

// 년.월.일. 시:분:초
export const formatDateTime = (dateInput: string) => {
  // 1. 입력값을 바탕으로 Date 객체를 생성합니다.
  const date = new Date(dateInput);

  // 2. 생성된 Date 객체가 유효한지 확인합니다.
  // isNaN(date) 또는 isNaN(date.getTime())으로 확인할 수 있습니다.
  if (isNaN(date.getTime())) {
    return '유효하지 않은 날짜입니다.';
  }

  // 3. 연, 월, 일, 시, 분, 초를 각각 추출합니다.
  const year = date.getFullYear();
  // getMonth()는 0부터 시작하므로 (0=1월), 1을 더해줍니다.
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  // 4. 월, 일, 시, 분, 초가 한 자리 수일 경우 앞에 '0'을 붙여줍니다. (예: 1 -> "01")
  const paddedMonth = String(month).padStart(2, '0');
  const paddedDay = String(day).padStart(2, '0');
  const paddedHours = String(hours).padStart(2, '0');
  const paddedMinutes = String(minutes).padStart(2, '0');
  const paddedSeconds = String(seconds).padStart(2, '0');

  // 5. 최종 형식에 맞게 문자열을 조합하여 반환합니다.
  return `${year}. ${paddedMonth}. ${paddedDay}. ${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
};
