import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const buttonWrapperStyle = style({
  position: 'fixed',
  bottom: 0,
  padding: '2.4rem 2rem',
  gap: '0.8rem',
  
  justifyContent: 'space-between',
  alignItems: 'center',

  backgroundColor: vars.colors.white,
  boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.1)',
});
