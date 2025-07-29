import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const container = style({
  padding: '3.2rem',
  background: vars.colors.white,
  color: vars.colors.black,
});

export const item = style({
  marginBottom: '3.2rem',
});

export const label = style({
  color: vars.colors.gray08,
  marginBottom: '4rem',
});
