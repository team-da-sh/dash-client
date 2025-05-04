import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const profileStyle = style({
  width: '4rem',
  height: '4rem',

  borderRadius: '50%',
  objectFit: 'cover',
  backgroundColor: vars.colors.gray01,
});
