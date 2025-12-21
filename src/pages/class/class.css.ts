import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const withdrawImgStyle = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.8rem',
  width: '100%',
  height: '37.5rem',
  backgroundColor: vars.colors.gray01,
});

export const withdrawIconStyle = style({
  marginBottom: '2rem',
});

export const topImgStyle = style({
  position: 'relative',

  width: '100%',
  height: '37.5rem',

  backgroundColor: vars.colors.gray02,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

export const chipWrapperStyle = style({
  position: 'absolute',
  left: '2rem',
  bottom: '1.6rem',
});
