import { style } from '@vanilla-extract/css';

export const pannelTitleWrapper = style({
  display: 'flex',
  gap: '0.4rem',
  alignItems: 'center',

  marginTop: '2rem',
  marginBottom: '1.6rem',
});

export const studentListWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const textStyle = style({
  whiteSpace: 'nowrap',
});
