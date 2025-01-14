import { style } from '@vanilla-extract/css';

export const containerStyle = style({
  position: 'fixed',
  top: 0,
  display: 'flex',
  justifyContent: 'space-between',

  width: '100%',
  padding: '0 2rem',

  backgroundColor: 'black',
});

export const iconsStyle = style({
  display: 'flex',
  gap: '2rem',
});
