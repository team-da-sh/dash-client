import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const containerStyle = style({
  display: 'flex',
  flexDirection: 'column',

  width: '100%',
  padding: '8.4rem 2rem 15rem 2rem',
});

export const buttonContainerStyle = style({
  width: '100%',
  position: 'fixed',
  bottom: '0',
  padding: '2.4rem 2rem',
  backgroundColor: vars.colors.white,
});
