import { style } from '@vanilla-extract/css';

export const containerStyle = style({
  position: 'relative',
  height: '100vh',
});

export const headerWrapperStyle = style({
  position: 'fixed',
  top: 0,
});

export const progressBarStyle = style({
  position: 'fixed',
  top: '6rem',
});

export const bodyWrapperStyle = style({
  padding: '11.2rem 2rem 0 2rem',
});

export const footerWrapperStyle = style({
  position: 'absolute',
  bottom: '2.4rem',

  width: '100%',
  padding: '0 2rem',
});
