import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const containerStyle = style({
  padding: '2.8rem 0 2.4rem 2rem',

  backgroundColor: vars.colors.gray01,
});

export const textStyle = style({
  textDecoration: 'none',
});
