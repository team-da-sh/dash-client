import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const viewportStyle = style({
  overflow: 'hidden',
  width: '100%',
  position: 'relative',
  touchAction: 'pan-y',
});

export const trackStyle = style({
  display: 'flex',
  willChange: 'transform',
});

export const slideStyle = style({
  flexShrink: 0,
  width: '100%',
});

export const paginationStyle = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.4rem',
  position: 'absolute',
  bottom: '1.2rem',
  left: 0,
  right: 0,
  zIndex: vars.zIndex.two,
});

export const dotStyle = style({
  width: '0.4rem',
  height: '0.4rem',
  borderRadius: '50%',
  backgroundColor: vars.colors.white50,
  transition: 'background-color 200ms ease',
  padding: 0,
  border: 'none',
  cursor: 'pointer',
});

export const dotActiveStyle = style({
  backgroundColor: vars.colors.white,
});
