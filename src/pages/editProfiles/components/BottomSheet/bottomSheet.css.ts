import { keyframes, style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const bottomSheetContainerStyle = style({
  overflow: 'hidden',
});

const fadeIn = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

const fadeOut = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
});

export const overlayVisible = style({
  animation: `${fadeIn} 0.3s ease-out forwards`,
});

export const overlayHidden = style({
  animation: `${fadeOut} 0.3s ease-in forwards`,
});

export const overlayStyle = style({
  position: 'fixed',
  left: '50%',
  transform: 'translateX(-50%)',
  bottom: 0,
  height: '100vh',
  width: '100%',

  background: vars.colors.black70,
  zIndex: vars.zIndex.two,
  cursor: 'pointer',
});

const slideIn = keyframes({
  from: {
    transform: 'translate(-50%, 100%)',
  },
  to: {
    transform: 'translate(-50%, 0)',
  },
});

const slideOut = keyframes({
  from: {
    transform: 'translate(-50%, 0)',
  },
  to: {
    transform: 'translate(-50%, 100%)',
  },
});

export const bottomSheetVisible = style({
  animation: `${slideIn} 0.1s ease-out forwards`,
});

export const bottomSheetHidden = style({
  animation: `${slideOut} 0.1s ease-in forwards`,
});

export const container = style({
  position: 'fixed',
  left: '50%',
  bottom: 0,
  transform: 'translateX(-50%)',

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
