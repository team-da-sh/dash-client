import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const tagCustomStyle = style({
  gap: '0.2rem',
  border: `1px solid ${vars.colors.gray04}`,
});
