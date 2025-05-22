import { useState, useMemo } from 'react';
import CalendarCustom from '@/pages/search/components/Calendar/Calendar';
import { getDateWithoutTime } from '@/shared/utils/timeUtils';

interface DateStepProps {
  startDate: string;
  setStartDate: (date: string) => void;
  times?: { startTime: string; endTime: string; date: string; duration: number }[];
}

const DateStep = ({ startDate, setStartDate, times = [] }: DateStepProps) => {
  const [selectedDate, setSelectedDate] = useState<string>(startDate);

  // 최소 선택 가능 날짜 계산
  const minSelectableDate = useMemo(() => {
    // 오늘 날짜를 한 번만 계산
    const today = getDateWithoutTime(new Date());

    // 일정이 없으면 오늘 날짜 반환
    if (times.length === 0) {
      return today;
    }

    // 각 일정의 종료 날짜들 중 가장 늦은 날짜 찾기
    const latestEndDate = times.reduce((latest, time) => {
      const endDate = getDateWithoutTime(new Date(time.endTime));
      return endDate > latest ? endDate : latest;
    }, new Date(0));

    // 오늘보다 이전 날짜면 오늘을 반환, 아니면 찾은 최신 날짜 반환
    return latestEndDate < today ? today : latestEndDate;
  }, [times]);

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
    setStartDate(date);
  };

  return (
    <div className={`custom-register-style`}>
      <CalendarCustom
        startDate={selectedDate}
        setStartDate={handleDateChange}
        isSearch={false}
        minCustomDate={minSelectableDate}
      />
    </div>
  );
};

export default DateStep;
