import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const layoutStyle = style({
  height: '100vh',

  backgroundColor: vars.colors.gray01,
});

export const containerStyle = style({
  padding: '8.4rem 2rem 3.4rem 2rem',
});
