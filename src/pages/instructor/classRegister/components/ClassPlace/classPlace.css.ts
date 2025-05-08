import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

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
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  width: '100%',
  padding: '1rem 2rem',
  backgroundColor: vars.colors.gray01,
  borderRadius: '4px',
});

export const checkboxContainerStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
  alignSelf: 'flex-end',
});

export const checkboxStyle = style({
  width: '2rem',
  height: '2rem',
  outline: `1px solid ${vars.colors.gray07}`,
  borderRadius: '0.2rem',
  cursor: 'pointer',
});

export const selectedLocationContainerStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  width: '100%',
  backgroundColor: vars.colors.gray01,
  borderRadius: '4px',
  padding: '1.4rem 2rem',
});

export const locationEmptyContainerStyle = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '100%',
  height: '5.2rem ',
  backgroundColor: vars.colors.gray01,
  color: vars.colors.gray06,
  borderRadius: '8px',
  ...vars.fonts.b2_sb_long,
});
