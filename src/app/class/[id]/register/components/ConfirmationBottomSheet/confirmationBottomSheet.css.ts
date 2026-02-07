import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const overlayStyle = style({
  position: 'fixed',
  bottom: 0,
  height: '100vh',
  width: '100%',

  background: vars.colors.black50,
  zIndex: vars.zIndex.two,
});

export const containerStyle = style({
  position: 'fixed',
  bottom: 0,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '3.2rem 2.4rem 2.8rem 2.4rem',

  width: '100%',
  height: '29.2rem',

  borderRadius: '16px 16px 0 0',
  backgroundColor: vars.colors.white,

  zIndex: vars.zIndex.three,
});

export const topContainerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2.2rem',
});

export const titleStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
});

export const subTitleStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.2rem',
});

export const confirmButtonContainer = style({
  position: 'fixed',
  bottom: '0',
  padding: '0 2.4rem 2.8rem',
  width: '100%',
});
