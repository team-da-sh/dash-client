import Calendar from 'react-calendar';
import './index.css';

type Value = Date | null;
type Range<T> = [T, T];

interface CalendarCustomProps {
  startDate: string;
  endDate?: string;
  setStartDate: (date: string) => void;
  setEndDate?: (date: string) => void;
  isSearch: boolean;
}

const CalendarCustom = ({ startDate, endDate, setStartDate, setEndDate, isSearch }: CalendarCustomProps) => {
  const dateChangeHandler = (value: Value | Range<Value>) => {
    // 시작과 끝 날짜 모두 선택한 경우
    if (Array.isArray(value)) {
      const [start, end] = value;
      setStartDate(start ? formatDay(start) : '');
      if (setEndDate) setEndDate(end ? formatDay(end) : '');
    }
    // 단일 선택인 경우
    else if (value) {
      setStartDate(formatDay(value));
      if (setEndDate) setEndDate('');
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

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const minDate = isSearch ? undefined : today;

  const tileClassName = ({ date }: { date: Date }) => {
    if (minDate && date < minDate) {
      return 'disabled-date';
    }
    return '';
  };

  return (
    <div className={isSearch ? `search-calendar` : `class-register-calendar`}>
      <Calendar
        locale="ko"
        selectRange={isSearch}
        onChange={dateChangeHandler}
        formatDay={formatCalendarDay}
        showNeighboringMonth={false}
        minDetail="year"
        defaultValue={
          startDate ? (endDate ? [new Date(startDate), new Date(endDate)] : new Date(startDate)) : undefined
        }
        minDate={isSearch ? undefined : today}
        tileClassName={tileClassName}
      />
    </div>
  );
};

export default CalendarCustom;
