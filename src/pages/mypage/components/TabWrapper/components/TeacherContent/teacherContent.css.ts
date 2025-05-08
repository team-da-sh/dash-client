import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const containerStyle = style({
  display: 'flex',
  flexDirection: 'column',
});

export const topContainerStyle = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  backgroundColor: vars.colors.white,
});

export const reviewContainerStyle = style({
  display: 'flex',
  padding: '2rem 1.6rem',
  gap: '0.4rem',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const classButtonStyle = style({
  position: 'fixed',
  right: '20px',
  bottom: '36px',

  display: 'flex',
  justifyContent: 'center',
  width: 'max-content',
  alignItems: 'center',
  gap: '0.2rem',
  padding: '1.2rem 1.6rem 1.2rem 1.2rem',

  borderRadius: '40px',
  backgroundColor: vars.colors.main04,
});

export const allButtonStyle = style({
  display: 'flex',
  padding: '0.6rem 0.8rem',
  textAlign: 'center',

  borderRadius: '50px',
  backgroundColor: vars.colors.gray01,

  color: vars.colors.gray08,
  ...vars.fonts.c1_sb,

  cursor: 'pointer',
});
