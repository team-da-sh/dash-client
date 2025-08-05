import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const labelStyle = style({
  minWidth: '4.7rem',

  whiteSpace: 'nowrap',
});

export const containerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

export const wrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const inputWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '3.2rem',
  marginTop: '3.2rem',
  width: '100%',
});

export const numberWrapperStyle = style({
  display: 'flex',
  gap: '0.4rem',
});

export const inputStyle = style({
  flex: 1,
});

export const buttonStyle = style({
  width: '8.2rem',
  height: '5.2rem',

  padding: '0.3rem 0.8rem',
  textAlign: 'center',
  ...vars.fonts.b2_sb_long,
});

export const timerStyle = style({
  display: 'flex',
  alignItems: 'center',
});
