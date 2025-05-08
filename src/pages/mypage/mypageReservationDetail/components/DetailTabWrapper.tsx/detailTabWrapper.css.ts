import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const containerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.8rem',
});

export const textStyle = style({
  ...vars.fonts.b1_sb,
});
