import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const topImgStyle = style({
  position: 'relative',
  width: '100%',
  aspectRatio: '375 / 204',
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
  aspectRatio: '375 / 160',
  background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%)',
  zIndex: vars.zIndex.one,
});

export const textWrapperStyle = style({
  display: 'flex',
  position: 'absolute',
  bottom: '3rem',
  gap: '0.8rem',

  paddingLeft: '2rem',
  paddingRight: '2rem',
  flexDirection: 'column',
  zIndex: vars.zIndex.one,
});
