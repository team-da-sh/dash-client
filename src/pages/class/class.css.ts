import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const headerStyle = style({
  width: '100%',
  height: '37.5rem',

  backgroundColor: vars.colors.gray02,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});
