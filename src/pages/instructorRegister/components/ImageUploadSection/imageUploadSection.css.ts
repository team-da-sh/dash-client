import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const containerStyle = style({
  display: 'flex',
  flexDirection: 'column',

  width: '9.6rem',
  height: '9.6rem',
  borderRadius: '100%',
});

export const previewImgStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
  height: '100%',
  position: 'relative',

  margin: '0 auto',
  backgroundColor: vars.colors.gray01,
  backgroundSize: 'cover',
  backgroundPosition: 'center',

  borderRadius: '100%',
  cursor: 'pointer',
  border: `1px solid ${vars.colors.gray04}`,
});

export const inputStyle = style({
  display: 'none',
});

export const icCameraStyle = style({
  position: 'absolute',
  bottom: '0.6rem',
  right: '0.6rem',
});
