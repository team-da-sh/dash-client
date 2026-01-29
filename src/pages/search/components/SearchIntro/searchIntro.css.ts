import { style } from '@vanilla-extract/css';

export const containerStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
});

export const contentWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
});

export const titleWrapperStyle = style({
  display: 'flex',
});
