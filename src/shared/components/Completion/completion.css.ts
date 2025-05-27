import { style } from '@vanilla-extract/css';

export const flexCustomStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.6rem',
  margin: '4.4rem 0 3.2rem 0',
});

export const clearStyle = style({
  width: '24.4rem',
  height: '24.4rem',
  alignSelf: 'center',
  marginTop: '3.7rem',
});
