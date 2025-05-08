import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const clearStyle = style({
  width: '24.4rem',
  height: '24.4rem',
  alignSelf: 'center',
  marginTop: '6.7rem',
});

export const containerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  padding: '4.4rem 2rem 0 2rem',
});

export const buttonContainerStyle = style({
  position: 'fixed',
  bottom: '0',
  width: '100%',
  padding: '2.4rem 2rem',
  backgroundColor: vars.colors.white,
});
