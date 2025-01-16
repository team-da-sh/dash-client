import { style } from '@vanilla-extract/css';

export const containerStyle = style({
  position: 'relative',
  height: '100vh',

  border: '4px solid black',
});

export const headerWrapperStyle = style({
  position: 'fixed',
  top: 0,
});

export const progressBarStyle = style({
  position: 'absolute',
  top: '6rem',
});
export const bodyWrapperStyle = style({
  padding: '6rem 2rem 0 2rem',
});

export const footerWrapperStyle = style({
  position: 'absolute',
  bottom: '2.4rem',

  width: '100%',
  padding: '0 2rem',
});
