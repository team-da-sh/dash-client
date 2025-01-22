import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

// 클래스 장소
export const searchContainerStyle = style({
  height: '5.2rem',
  backgroundColor: vars.colors.gray01,
  borderRadius: '4px',
  padding: '1.4rem 1.8rem',
});

export const dividerStyle = style({
  width: '100%',
  height: '0.1rem',
  backgroundColor: vars.colors.gray03,
});

export const locationItemContainerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  width: '100%',
  cursor: 'pointer',
});

export const locationListContainerStyle = style({
  width: '100%',
  padding: '1rem 2rem',
  backgroundColor: vars.colors.gray01,
  borderRadius: '4px',
});
