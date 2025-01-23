import { useState } from 'react';
import CalendarCustom from '@/pages/search/components/Calendar';

interface DateStepProps {
  startDate: string;
  setStartDate: (date: string) => void;
}

const DateStep = ({ startDate, setStartDate }: DateStepProps) => {
  const [selectedDate, setSelectedDate] = useState<string>(startDate);

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
    setStartDate(date);
  };

  return (
    <div className={`custom-register-style`}>
      <CalendarCustom startDate={selectedDate} setStartDate={handleDateChange} isSearch={false} />
    </div>
  );
};

export default DateStep;
