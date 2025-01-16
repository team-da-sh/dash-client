import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const flexCustomStyle = style({
  width: '100%',
});

export const addInputBoxStyle = style({
  width: '100%',
  height: '5.2rem',
  backgroundColor: vars.colors.gray01,
});
