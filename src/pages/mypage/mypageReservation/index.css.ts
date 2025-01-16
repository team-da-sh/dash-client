import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const layoutStyle = style({
  height: '100vh',
  padding: '6.4rem 2rem 3.2rem 2rem',

  backgroundColor: vars.colors.gray01,
});
