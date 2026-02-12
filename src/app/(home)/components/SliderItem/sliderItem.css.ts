import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const containerStyle = style({
  display: 'flex',
  position: 'relative',

  width: '100%',
  marginTop: '-6rem',
  aspectRatio: '1 / 1',

  '::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '50%',
    background: 'linear-gradient(180deg, rgba(44, 44, 44, 0.00) 0%, #000 100%)',
    pointerEvents: 'none',
    zIndex: vars.zIndex.one,
  },
});

export const imageStyle = style({
  display: 'block',
  position: 'absolute',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const descriptionStyle = style({
  position: 'absolute',
  left: '2rem',
  bottom: '5.6rem',
  maxWidth: '34rem',

  wordBreak: 'keep-all',
  whiteSpace: 'pre-line',
  zIndex: 2,
});

export const showDetailButtonStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.2rem',

  position: 'absolute',
  left: '2rem',
  bottom: '2.8rem',

  color: vars.colors.white,
  ...vars.fonts.b3_m,

  border: 'none',

  cursor: 'pointer',
});
