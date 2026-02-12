import { style } from '@vanilla-extract/css';

export const containerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

export const wrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const gifWrapperStyle = style({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  marginTop: '6.7rem',
});
