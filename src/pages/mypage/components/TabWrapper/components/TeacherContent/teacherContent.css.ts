import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const containerStyle = style({
  display: 'flex',
  flexDirection: 'column',
});

export const topContainerStyle = style({
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
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.2rem',

  position: 'absolute',
  right: '2rem',
  bottom: '36px',

  width: 'max-content',
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

export const snsUrlStyle = style({
  maxWidth: '8.8rem',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});
