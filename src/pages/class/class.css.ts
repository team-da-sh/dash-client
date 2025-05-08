import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const topImgStyle = style({
  position: 'relative',

  width: '100%',
  height: '37.5rem',

  backgroundColor: vars.colors.gray02,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

export const chipWrapperStyle = style({
  position: 'absolute',
  left: '2rem',
  bottom: '1.6rem',
});
