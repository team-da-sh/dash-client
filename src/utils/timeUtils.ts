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
