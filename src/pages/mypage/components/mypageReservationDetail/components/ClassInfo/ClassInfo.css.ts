import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const infoContainerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  margin: '0 auto',
  padding: '2rem 0',
  width: '100%',

  background: vars.colors.white,
  borderRadius: '4px',
});

export const textLabelStyle = style({
  width: '4.4rem',
  whiteSpace: 'nowrap',
});
