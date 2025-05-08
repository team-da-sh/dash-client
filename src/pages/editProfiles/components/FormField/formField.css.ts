import { style } from '@vanilla-extract/css';

export const fieldWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',

  padding: '1.2rem 0',
});

export const errorMessageStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
});
