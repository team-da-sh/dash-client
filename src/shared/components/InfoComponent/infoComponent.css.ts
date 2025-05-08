import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const infoContainerStyle = style({
  display: 'flex',
  alignItems: 'center',

  justifyContent: 'space-between',
  padding: '2rem',

  backgroundColor: vars.colors.gray01,
});

export const imgStyle = style({
  width: '6rem',
  height: '6rem',

  objectFit: 'cover',
  borderRadius: '68.75px',
  border: `0.833px solid ${vars.colors.gray04}`,
});

export const wrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',

  gap: '0.8rem',
});

export const textWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});
