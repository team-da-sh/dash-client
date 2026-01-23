import { style } from '@vanilla-extract/css';

export const containerStyle = style({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2.4rem',
  marginTop: '6rem',
});

export const textWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

