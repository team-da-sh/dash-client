// 시간 증가
export const increaseHour = (currentHour: number): number => (currentHour === 12 ? 1 : currentHour + 1);

// 시간 감소
export const decreaseHour = (currentHour: number): number => (currentHour === 1 ? 12 : currentHour - 1);

// 분 증가 (30분 단위)
export const increaseMinute = ({
  currentMinute,
  setHour,
}: {
  currentMinute: number;
  setHour: React.Dispatch<React.SetStateAction<number>>;
}): number => {
  if (currentMinute === 0) {
    return 30;
  } else if (currentMinute === 30) {
    setHour((prevHour) => (prevHour === 12 ? 1 : prevHour + 1));
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
  if (currentMinute === 30) {
    return 0;
  } else if (currentMinute === 0) {
    setHour((prevHour) => (prevHour === 1 ? 12 : prevHour - 1));
    return 30;
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
  if (ampm === 'PM' && hour !== 12) {
    return hour + 12;
  } else if (ampm === 'AM' && hour === 12) {
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
  if (ampm === 'PM' && hour !== 12) {
    adjustedHour += 12;
  } else if (ampm === 'AM' && hour === 12) {
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
