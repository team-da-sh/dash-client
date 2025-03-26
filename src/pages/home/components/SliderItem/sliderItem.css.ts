import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const containerStyle = style({
  display: 'flex',
  position: 'relative',

  width: '100%',
  aspectRatio: '1 / 1',
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
  bottom: '9rem',
  maxWidth: '34rem',

  wordBreak: 'keep-all',
  whiteSpace: 'pre-line',
});

export const showDetailWrapperStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.2rem',

  position: 'absolute',
  left: '2rem',
  bottom: '2.8rem',
});

export const showDetailButtonStyle = style({
  color: vars.colors.white,
  ...vars.fonts.b7,

  border: 'none',

  cursor: 'pointer',
});
