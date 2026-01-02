import { style } from '@vanilla-extract/css';

export const tagCustomStyle = style({
  gap: '0.2rem',
});

export const containerStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  paddingTop: '1.2rem',
  paddingBottom: '1.6rem',
  width: '100%',
});

export const tagWrapperStyle = style({
  display: 'flex',
  gap: '0.6rem',
});
