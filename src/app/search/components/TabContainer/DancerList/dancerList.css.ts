import { style } from '@vanilla-extract/css';

export const dancerImageStyle = style({
  width: '7.2rem',
  height: '7.2rem',
  borderRadius: '50%',

  objectFit: 'cover',
});

export const listStyle = style({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
});

export const listItemStyle = style({
  display: 'flex',
  alignItems: 'center',
  paddingTop: '1.6rem',
  paddingBottom: '1.6rem',
  gap: '2rem',
  width: '100%',
});

export const dancerInfoStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const tagWrapperStyle = style({
  display: 'flex',
  gap: '0.5rem',
});
