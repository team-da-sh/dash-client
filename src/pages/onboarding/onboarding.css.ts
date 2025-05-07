import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const containerStyle = style({
  position: 'relative',
});

export const bodyWrapperStyle = style({
  padding: '4.1rem 2rem 10.2rem 2rem',
});

export const footerWrapperStyle = style({
  position: 'fixed',
  bottom: '0',
  zIndex: 5,

  width: '100%',
  padding: '2.4rem 2rem ',

  backgroundColor: vars.colors.white,
});
