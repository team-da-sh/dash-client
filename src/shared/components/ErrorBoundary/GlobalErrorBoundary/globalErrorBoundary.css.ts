import { style } from '@vanilla-extract/css';

export const containerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  padding: '6rem 2rem 12rem 2rem',
  textAlign: 'center',
});

export const buttonContainerStyle = style({
  position: 'fixed',
  bottom: 0,
  width: '100%',
  padding: '2.4rem 2rem',
});
