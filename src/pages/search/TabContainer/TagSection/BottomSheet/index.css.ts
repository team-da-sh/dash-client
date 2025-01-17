import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const bottomSheet = style({
  overflow: 'hidden',
});

export const overlayStyle = style({
  position: 'fixed',
  left: 'calc(50vw - 21.5rem)',
  bottom: 0,
  height: '100vh',
  width: '100%',
  background: vars.colors.black70,
  zIndex: 2,
  cursor: 'pointer',
});

export const bottomSheetStyle = style({
  position: 'fixed',
  height: '50rem',
  width: '100%',
  bottom: 0,
  left: 'calc(50vw - 21.5rem)',

  background: vars.colors.white,
  padding: '3.6rem 2rem 2.4rem 2rem',
  zIndex: 3,
  borderRadius: '16px 16px 0 0',
});
