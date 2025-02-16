import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const flexCustomStyle = style({
  margin: '4.8rem 0 2.8rem 0',
});

export const clearStyle = style({
  width: '24.4rem',
  height: '24.4rem',
  alignSelf: 'center',
  marginTop: '6.7rem',
});

export const funnelContainerStyle = style({
  width: '100%',
  height: '100vh',
  padding: '6.4rem 2rem 15rem 2rem',
});

export const buttonContainerStyle = style({
  position: 'fixed',
  bottom: '0',
  width: '100%',
  padding: '2.4rem 2rem',
  backgroundColor: vars.colors.white,
});
