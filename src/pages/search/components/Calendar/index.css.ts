import { globalStyle } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

globalStyle('.react-calendar', {
  width: '100%',
  height: '33.7rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '0.9rem',
  padding: '0 2rem',
});

globalStyle('.react-calendar__navigation', {
  display: 'flex',
  height: '3.2rem',
  width: '23rem',
  marginBottom: '0.8rem',
  gap: '1.2rem',
  alignContent: 'center',
  justifyContent: 'center',
});

globalStyle('.react-calendar__navigation__arrow.react-calendar__navigation__prev-button', {
  color: vars.colors.gray07,
  fontSize: '2.5rem',
});

globalStyle('.react-calendar__navigation__arrow.react-calendar__navigation__next-button', {
  color: vars.colors.gray07,
  fontSize: '2.5rem',
});

globalStyle('.react-calendar__navigation__label', {
  ...vars.fonts.h4,
  marginTop: '0.8rem',
  pointerEvents: 'none',
});

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
  width: '100%',
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

// 기간 첫 날짜 배경 원 스타일
globalStyle(' .react-calendar__tile--rangeStart abbr', {
  content: "''",
  position: 'absolute',
  display: 'center',
  textAlign: 'center',
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
  textAlign: 'center',
  transform: 'translate(-50%, -50%)',
  width: '3.6rem',
  height: '3.6rem',
  background: vars.colors.main04,
  color: vars.colors.white,
  borderRadius: '50%',
  alignContent: 'center',
});

// 검색일 때 스타일
globalStyle('.search-calendar .react-calendar__month-view__days .react-calendar__tile--rangeEnd', {
  position: 'relative',
  color: 'white',
  background: 'linear-gradient(to right, #C3B9FF 50%, white 50%) ',
});

globalStyle('.search-calendar .react-calendar__tile--rangeStart', {
  position: 'relative',
  color: 'white',
  background: 'linear-gradient(to right, white 50%, #C3B9FF 50%) !important',
});

globalStyle('.search-calendar .react-calendar__tile--range', {
  borderRadius: '0',
  background: vars.colors.main01,
});

// 강좌 등록일 때 스타일
globalStyle('.class-register-calendar .react-calendar__month-view__days .react-calendar__tile--rangeEnd', {
  position: 'relative',
  color: 'white',
});

globalStyle('.class-register-calendar .react-calendar__tile--rangeStart', {
  position: 'relative',
  color: 'white',
});

globalStyle('.class-register-calendar .react-calendar__tile--range', {
  borderRadius: '0',
});

globalStyle('.disabled-date', {
  color: vars.colors.gray03,
  pointerEvents: 'none',
});
