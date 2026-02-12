import { style } from '@vanilla-extract/css';

export const nameLengthStyle = style({
  alignSelf: 'flex-end',
});

export const containerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  width: '100%',
  marginBottom: '2rem',
});

export const inputStyle = style({
  width: '100%',
});
