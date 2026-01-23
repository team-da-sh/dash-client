import { style } from '@vanilla-extract/css';

export const containerStyle = style({
  display: 'flex',
  width: '100%',
  padding: '0.8rem',
  justifyContent: 'space-between',
  height: '4.8rem',
});

export const contentStyle = style({
  display: 'flex',
  gap: '1.2rem',
  alignItems: 'center',
});

