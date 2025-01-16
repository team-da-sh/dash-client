import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const reservationStyle = style({
  backgroundColor: vars.colors.gray01,
});

export const headerStyle = style({
  zIndex: 10,
});