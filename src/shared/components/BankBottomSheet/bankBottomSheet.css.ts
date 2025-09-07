import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const overlayStyle = style({
  position: 'fixed',
  left: '50%',
  transform: 'translateX(-50%)',
  bottom: 0,
  height: '100vh',
  width: '100%',

  background: vars.colors.black50,
  zIndex: vars.zIndex.two,
});

export const containerStyle = style({
  position: 'fixed',
  bottom: 0,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '1.2rem 2rem 1.3rem 2rem',

  width: '100%',
  height: '58rem',

  borderRadius: '16px 16px 0 0',
  backgroundColor: vars.colors.white,

  zIndex: vars.zIndex.three,
});

export const IndicatorStyle = style({
  marginBottom: '1.2rem',
  width: '7.7rem',
  height: '0.6rem',
  borderRadius: '9px',
  flexShrink: 0,
  backgroundColor: vars.colors.gray02,
});

export const ListContainerStyle = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '1rem',

  marginTop: '3rem',
  width: '100%',

  overflowY: 'auto',
});

export const ListItemStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.4rem',

  width: '100%',
  height: '8.2rem',

  borderRadius: '6px',
  backgroundColor: vars.colors.gray01,

  cursor: 'pointer',
});

export const tempImageStyle = style({
  width: '3.8rem',
  height: '3.4rem',
});

export const scrollDisabled = style({
  overflowY: 'hidden',
});

export const scrollEnabled = style({
  overflowY: 'auto',
});
