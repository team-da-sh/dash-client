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
  startDate.setHours(adjustedHour, minute, 0, 0); // 시작 시간을 로컬 시간대로 설정

  const durationInMinutes = selectedTime * 60; // selectedTime이 시간 단위이므로 60분을 곱해서 분 단위로 계산

  const endDate = new Date(startDate);
  endDate.setMinutes(startDate.getMinutes() + durationInMinutes);

  startDate.setHours(startDate.getHours() + 9);
  endDate.setHours(endDate.getHours() + 9);

  return {
    startTime: startDate.toISOString(),
    endTime: endDate.toISOString(),
  };
};
