import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const overlayStyle = style({
  position: 'fixed',
  left: '50%',
  transform: 'translateX(-50%)',
  bottom: 0,
  height: '100vh',
  width: '100%',

  background: vars.colors.black50,
  zIndex: vars.zIndex.two,
});

export const container = style({
  position: 'fixed',
  bottom: 0,

  display: 'flex',
  flexDirection: 'column',
  gap: '2.7rem',
  padding: '2.8rem 2rem',

  width: '100%',
  height: '17rem',

  borderRadius: '16px 16px 0 0',
  backgroundColor: vars.colors.white,

  zIndex: vars.zIndex.three,
});

export const titleWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const text = style({
  width: '33.5rem',
  height: '3.2rem',
  textAlign: 'left',
});

export const textWrapper = style({
  display: 'flex',
  flexDirection: 'column',

  gap: '1.2rem',
});
