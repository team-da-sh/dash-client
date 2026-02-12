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
  zIndex: vars.zIndex.one,
});

export const textWrapperStyle = style({
  position: 'absolute',
  bottom: '2rem',
  left: '2rem',
  right: '2rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',

  zIndex: vars.zIndex.one,
  overflowWrap: 'break-word',
});

export const genresWrapperStyle = style({
  display: 'flex',
  flexDirection: 'row',
  gap: 4,
  flexWrap: 'wrap',
});
