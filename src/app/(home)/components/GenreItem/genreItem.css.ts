import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const containerStyle = style({
  position: 'relative',
  width: '100%',
  minWidth: '10.7rem',
  height: '7.6rem',

  borderRadius: '4px',
  backgroundColor: vars.colors.white,
});

export const medalStyle = style({
  position: 'absolute',
  top: 0,
  left: '0.8rem',
});

export const genreStyle = style({
  position: 'absolute',
  bottom: '1rem',
  right: '1rem',
});
