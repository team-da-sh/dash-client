import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const topImgStyle = style({
  position: 'relative',
  width: '100%',
  height: '37.5rem',

  background: vars.colors.gray10,
  overflow: 'hidden',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

export const gradientOverlayStyle = style({
  position: 'absolute',
  bottom: 0,
  left: 0,

  width: '100%',
  height: '16rem',

  background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%)',
  zIndex: 1,
});

export const textWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  
  gap: '0.8rem',
  paddingTop: '28.9rem',
  paddingLeft: '2rem',

  zIndex: 2,
});
