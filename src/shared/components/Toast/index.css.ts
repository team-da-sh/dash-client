import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const toastContainerStyle = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',

  width: '33.5rem',
  height: '4.2rem',
  padding: '1.2rem 9.8rem',
  marginBottom: '3rem',

  borderRadius: '6px',
  backgroundColor: vars.colors.gray10,

  ...vars.fonts.b2,
  color: vars.colors.white,
});
