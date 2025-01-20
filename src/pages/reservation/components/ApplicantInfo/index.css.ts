import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const bookerComponentStyle = style({
  display: 'flex',
  flexDirection: 'column',

  padding: '2rem',
  width: '100%',
  margin: '0 auto',
  gap: '1rem',

  background: vars.colors.white,
  borderRadius: '4px',
});
