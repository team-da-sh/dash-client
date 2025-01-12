import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';

// :root 변수 정의
globalStyle(':root', {
  vars: {
    '--min-width': '375px',
    '--max-width': '430px',
  },
});

// HTML, Body 스타일
globalStyle('html, body', {
  fontSize: '62.5%',
  scrollbarWidth: 'none',
  margin: 0,
  padding: 0,
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  scrollBehavior: 'smooth',
  backgroundColor: vars.colors.gray01,
});

// A 태그 스타일
globalStyle('a', {
  textDecoration: 'none',
  color: 'inherit',
});

// Select 태그 스타일
globalStyle('select', {
  background: vars.colors.white,
});

// #root 스타일
globalStyle('#root', {
  width: '100%',
  minWidth: 'var(--min-width)',
  maxWidth: 'var(--max-width)',
  minHeight: '100dvh',
  backgroundColor: '#fff',
  margin: '0 auto',
});

// Webkit 스크롤바 숨기기
globalStyle('::-webkit-scrollbar', {
  display: 'none',
});
