import { globalStyle } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

globalStyle('.react-calendar', {
  width: '37.5rem',
  height: '33.7rem',
  padding: '0.5rem 2rem 1.8rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

globalStyle('.react-calendar__navigation', {
  display: 'flex',
  height: '3.2rem',
  width: '20rem',
  marginBottom: '0.8rem',
});

globalStyle('.react-calendar__navigation__arrow.react-calendar__navigation__prev-button', {
  color: vars.colors.gray07,
  fontSize: '2rem',
});

globalStyle('.react-calendar__navigation__arrow.react-calendar__navigation__next-button', {
  color: vars.colors.gray07,
  fontSize: '2rem',
});

globalStyle('.react-calendar__navigation__label', {
  ...vars.fonts.h4,
  marginTop: '0.8rem',
  pointerEvents: 'none',
});

// .react-calendar__navigation button 스타일 정의
globalStyle('.react-calendar__navigation button', {});

// prev2 버튼 숨기기
globalStyle('.react-calendar__navigation__prev2-button', {
  display: 'none',
});

// next2 버튼 숨기기
globalStyle('.react-calendar__navigation__next2-button', {
  display: 'none',
});

// 요일 부분 스타일 정의
globalStyle('.react-calendar__month-view__weekdays__weekday', {
  textAlign: 'center',
  marginBottom: '1.2rem',
  color: vars.colors.gray07,
  ...vars.fonts.b7,
});

// 요일 밑줄 제거
globalStyle('.react-calendar__month-view__weekdays__weekday abbr', {
  textDecoration: 'none',
});

// 월 클릭 시 월 목록을 감싸는 컴포넌트 스타일
globalStyle('.react-calendar__year-view__months', {
  display: 'flex',
});

globalStyle('.react-calendar__month-view__days__day', {
  height: '3.6rem',
});

globalStyle('.react-calendar__month-view__days', {
  height: '26.9rem',
  ...vars.fonts.h6,
});

// 기간 첫 날짜 스타일
globalStyle(' .react-calendar__tile--rangeStart', {
  position: 'relative',
  color: 'white',
  background: 'linear-gradient(to right, white 50%, #C3B9FF 50%) !important',
});

// 기간 끝 날짜 스타일
globalStyle('.react-calendar__month-view__days .react-calendar__tile--rangeEnd', {
  position: 'relative',
  color: 'white',
  background: 'linear-gradient(to right, #C3B9FF 50%, white 50%) ',
});

// 기간 첫 날짜 배경 원 스타일
globalStyle(' .react-calendar__tile--rangeStart abbr', {
  content: "''",
  position: 'absolute',
  display: 'center',
  transform: 'translate(-50%, -50%)',
  width: '3.6rem',
  height: '3.6rem',
  background: vars.colors.main04,
  color: vars.colors.white,
  borderRadius: '50%',
  alignContent: 'center',
});

// 기간 끝 날짜 배경 원 스타일
globalStyle(' .react-calendar__tile--rangeEnd abbr', {
  content: "''",
  position: 'absolute',
  display: 'center',
  transform: 'translate(-50%, -50%)',
  width: '3.6rem',
  height: '3.6rem',
  background: vars.colors.main04,
  color: vars.colors.white,
  borderRadius: '50%',
  alignContent: 'center',
});

globalStyle('.react-calendar__tile--range', {
  borderRadius: '0',
  background: vars.colors.main01,
});
