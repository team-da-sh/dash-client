import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const cardStyle = style({
  display: 'inline-flex',
  alignItems: 'center',

  padding: '1.6rem 2rem',
  gap: '0.2rem',
  width: '100%',

  borderRadius: '4px',
  backgroundColor: vars.colors.white,
  boxShadow: '0px 0px 0.4rem 0px rgba(0, 0, 0, 0.10)',
});
