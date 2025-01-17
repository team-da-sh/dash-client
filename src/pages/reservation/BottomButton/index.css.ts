import { style } from '@vanilla-extract/css';

export const bottomButtonStyle = style({
  position: 'fixed',
  bottom: '2rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
});
