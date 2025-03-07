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
  animation: `${slideIn} 0.3s ease-out forwards`,
});

export const bottomSheetHidden = style({
  animation: `${slideOut} 0.3s ease-in forwards`,
});

export const bottomSheetStyle = style({
  position: 'fixed',
  height: '50rem',
  width: '100%',
  bottom: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  background: vars.colors.white,
  padding: '3.6rem 0 2rem 0',
  zIndex: vars.zIndex.three,
  borderRadius: '16px 16px 0 0',
});

export const genreButtonContainerStyle = style({
  display: 'flex',
  gap: '1.2rem',
  flexWrap: 'wrap',
  padding: '1.2rem 2rem 18.4rem 2rem',
});

export const tabListCustomStyle = style({
  display: 'flex',
  gap: '3.3rem',
});
