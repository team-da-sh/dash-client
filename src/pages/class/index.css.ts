import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const headerStyle = style({
  width: '37.5rem',
  height: '37.5rem',

  backgroundColor: vars.colors.gray02,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});