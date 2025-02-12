import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const bottomSheetContainerStyle = style({
  position: 'fixed',
  left: '50%',
  transform: 'translateX(-50%)',
  bottom: 0,

  height: '100vh',
  width: '100%',
  zIndex: vars.zIndex.two,

  background: vars.colors.black70,
});

export const mainWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  position: 'fixed',
  bottom: 0,
  left: '50%',
  zIndex: vars.zIndex.three,

  height: '50rem',
  width: '100%',

  borderRadius: '16px 16px 0 0',

  transform: 'translateX(-50%)',
  background: vars.colors.white,
});

export const headerStyle = style({
  borderRadius: '16px 16px 0 0',
});

export const buttonWrapperStyle = style({
  position: 'fixed',
  bottom: '0',

  width: '100%',
  padding: '2.4rem 2rem',
});
