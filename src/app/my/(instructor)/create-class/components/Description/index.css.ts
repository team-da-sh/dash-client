import { style } from '@vanilla-extract/css';

export const descriptionWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
});

export const descriptionHeaderRowStyle = style({
  display: 'flex',
  gap: '0.8rem',
});

export const essentialTextStyle = style({
  alignSelf: 'flex-end',
});
