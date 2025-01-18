import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const wrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  width: '31.2rem',
  height: '100vh',

  position: 'fixed',
  right: '0',

  backgroundColor: vars.colors.white,
});

export const visibleStyle = style({
  width: '100%',
  height: '100vh',

  position: 'fixed',
  right: '0',
  transform: 'translateX(0)',
  opacity: 1,
  transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
  zIndex: 6,

  backgroundColor: vars.colors.black70,
});

export const invisibleStyle = style({
  height: '100vh',
  position: 'fixed',
  right: '0',
  transform: 'translateX(31.2rem)',
  opacity: 0,
  transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
  zIndex: 6,
});
