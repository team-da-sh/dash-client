import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const clearGifStyle = style({
  width: '24.4rem',
  height: '24.4rem',
  alignSelf: 'center',
  marginTop: '6.7rem',
});

export const buttonContainerStyle = style({
  position: 'fixed',
  bottom: '0',
  width: '100%',
  padding: '2.4rem 2rem',
  backgroundColor: vars.colors.white,
});
