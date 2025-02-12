import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const progressBarCustomStyle = style({
  position: 'fixed',
  top: '6rem',
});

export const buttonContainerStyle = style({
  width: '100%',
  position: 'fixed',
  bottom: '0',
  padding: '2.4rem 2rem',
  backgroundColor: vars.colors.white,
});
