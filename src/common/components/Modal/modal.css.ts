import { keyframes, style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const layoutStyle = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  position: 'fixed',
  top: 0,

  width: '100%',
  height: '100dvh',
  zIndex: vars.zIndex.backdrop,

  backgroundColor: vars.colors.black70,
});

const modalAnimation = keyframes({
  from: {
    opacity: 0,
    transform: 'scale(0.5)',
  },
  to: {
    opacity: 1,
    transform: 'scale(1)',
  },
});

export const containerStyle = style({
  position: 'fixed',

  display: 'flex',
  flexDirection: 'column',
  gap: '2.4rem',

  width: '32.7rem',
  padding: '2.4rem 1.6rem 1.6rem 1.6rem',
  zIndex: vars.zIndex.modal,

  backgroundColor: vars.colors.white,
  borderRadius: '8px',

  animation: `0.28s ease-in-out ${modalAnimation}`,
});

export const containerNoGapStyle = style([
  containerStyle,
  {
    gap: '0',
  },
]);

export const contentStyle = style({
  padding: '0 0.8rem',

  ...vars.fonts.h6_sb,
  color: vars.colors.gray11,
});

export const descriptionStyle = style({
  padding: '1rem 0.8rem 2.4rem',

  ...vars.fonts.b2_m_long,
  color: vars.colors.gray07,
});

export const buttonWrapperStyle = style({
  display: 'flex',
  gap: '1rem',

  width: '100%',
});

export const closeButtonStyle = style({
  display: 'flex',

  justifyContent: 'center',
  padding: '1.7rem 3.5rem',

  border: 'none',
  borderRadius: '4px',
  backgroundColor: vars.colors.gray03,

  whiteSpace: 'nowrap',
  color: vars.colors.gray09,
  ...vars.fonts.b1_sb,

  cursor: 'pointer',
});
