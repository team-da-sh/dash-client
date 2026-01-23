import { style } from '@vanilla-extract/css';

export const dancerImageStyle = style({
  width: '7.8rem',
  height: '7.8rem',
  maxWidth: 'none',
  maxHeight: 'none',

  objectFit: 'cover',
  borderRadius: '50%',
});

export const dancerItemStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
  alignItems: 'center',
});

export const dancerInfoStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
  alignItems: 'center',
});
