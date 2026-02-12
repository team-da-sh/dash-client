import { style } from '@vanilla-extract/css';

export const genreListStyle = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(10.7rem, 1fr))',
  gap: '0.7rem',

  marginTop: '2rem',
});
