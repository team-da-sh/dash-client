import { style } from '@vanilla-extract/css';

export const containerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  padding: '4.6rem 2rem 0 2rem',
});

export const videoStyle = style({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  marginTop: '1.6rem',
  marginBottom: '2.7rem',
});

export const buttonContainerStyle = style({
  position: 'fixed',
  bottom: '0',
  width: '100%',
  padding: '2.4rem 2rem 6.6rem 2rem',
  // backgroundColor: vars.colors.white,
});
