import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const roundBoxStyle = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  marginRight: '1rem',
  padding: '0.6rem 1.2rem',

  borderRadius: '4px',
  backgroundColor: vars.colors.main04,
});
