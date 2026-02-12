import { style } from '@vanilla-extract/css';

export const clearGifStyle = style({
  width: '24.4rem',
  height: '24.4rem',
  alignSelf: 'center',
  marginTop: '6.7rem',
});

export const buttonContainerStyle = style({
  position: 'fixed',
  bottom: '0',
  width: '100%',
  padding: '2.4rem 2rem',
});

export const mainContainerStyle = style({
  paddingRight: '2rem',
  paddingLeft: '2rem',
});

export const contentWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
  width: '100%',
  marginTop: '4.4rem',
});

export const titleWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
});
