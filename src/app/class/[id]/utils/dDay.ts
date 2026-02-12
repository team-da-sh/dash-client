export const getDDayLabel = (remainingDays: number): string => {
  if (remainingDays > 0) return `D-${remainingDays}`;
  if (remainingDays === 0) return 'D-DAY';
  return '마감';
};
