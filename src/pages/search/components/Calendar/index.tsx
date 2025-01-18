import Calendar from 'react-calendar';
import './index.css';

type Value = Date | null;
type Range<T> = [T, T];

interface CalendarCustomProps {
  startDate: string;
  endDate: string;
  setStartDate: (date: string) => void;
  setEndDate: (date: string) => void;
}

const CalendarCustom = ({ startDate, endDate, setStartDate, setEndDate }: CalendarCustomProps) => {
  const dateChangeHandler = (value: Value | Range<Value>) => {
    if (Array.isArray(value) && value[0] && value[1]) {
      setStartDate(formatDay(value[0]));
      setEndDate(formatDay(value[1]));
    }
  };

  const formatDay = (date: Date): string => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const formatCalendarDay = (locale: string | undefined, date: Date): string => {
    if (locale === 'ko') {
      return `${date.getDate()}`;
    }
    return date.getDate().toString();
  };

  return (
    <Calendar
      locale="ko"
      selectRange={true}
      onChange={dateChangeHandler}
      formatDay={formatCalendarDay}
      showNeighboringMonth={false}
      minDetail="year"
      defaultValue={startDate && endDate ? [new Date(startDate), new Date(endDate)] : undefined}
    />
  );
};

export default CalendarCustom;
