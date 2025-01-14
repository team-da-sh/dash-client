import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './index.css';

type Value = Date | null;
type Range<T> = [T, T];

const CalendarCustom: React.FC = () => {
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);
  const [showCalendar, setShowCalendar] = useState(true);

  console.log(startDate); // 시작 날짜
  console.log(endDate); // 끝 날짜

  const dateChangeHandler = (value: Value | Range<Value>) => {
    if (Array.isArray(value) && value[0] && value[1]) {
      setStartDate(formatDay(value[0]));
      setEndDate(formatDay(value[1]));
      setShowCalendar(!showCalendar);
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
    />
  );
};

export default CalendarCustom;
