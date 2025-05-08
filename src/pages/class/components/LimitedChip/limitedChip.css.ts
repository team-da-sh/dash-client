import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const cardStyle = style({
  display: 'inline-flex',
  alignItems: 'center',

  padding: '0.6rem 1.2rem 0.6rem 0.8rem',
  gap: '0.2rem',

  borderRadius: '70px',
  backgroundColor: vars.colors.black70,
});
