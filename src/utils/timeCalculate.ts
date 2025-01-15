export type ReservationStatus = 'ongoing' | 'upcoming' | 'completed';

// 레슨 시작, 끝 시간과 현재 시간을 비교해서 클래스의 수강 상태를 계산하는 함수
export const getReservationStatus = (
  lessonStartDateTime: string,
  lessonEndDateTime: string
): { status: ReservationStatus; remainingDays?: number } => {
  const currentTime = new Date();
  const startTime = new Date(lessonStartDateTime);
  const endTime = new Date(lessonEndDateTime);

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
