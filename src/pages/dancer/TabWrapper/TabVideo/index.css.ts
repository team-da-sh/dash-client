import { style } from '@vanilla-extract/css';

export const videoWrapper = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '20px',
  justifyContent: 'center',
});

export const videoItem = style({
  width: '33.5rem',
  textAlign: 'center',
  border: 'none',
});

export const iframe = style({
  width: '100%',
});
