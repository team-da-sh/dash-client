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
