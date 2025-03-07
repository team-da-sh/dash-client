import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const containerStyle = style({
  marginTop: '4.8rem',
  padding: '2.8rem 0 2.4rem 2rem',

  backgroundColor: vars.colors.gray01,
});
