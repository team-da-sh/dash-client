import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const containerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const inputStyle = style({
  visibility: 'hidden',
});

export const imgWrapperStyle = style({
  position: 'relative',
  width: '9.6rem',
  height: '9.6rem',

  overflow: 'hidden',
  border: `1px solid ${vars.colors.gray04}`,
  borderRadius: '110px',

  cursor: 'pointer',
});

export const overlayStyle = style({
  position: 'absolute',
  bottom: 0,
  left: 0,

  textAlign: 'center',
  width: '100%',

  padding: '0.2rem 0rem 0.5rem 0rem',

  backgroundColor: vars.colors.black70,
});
