import { style } from '@vanilla-extract/css';

export const containerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,

  height: 'calc(100dvh - 6rem)',
  padding: 20,
});
