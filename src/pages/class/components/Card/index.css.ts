import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const cardStyle = style({
  display: 'inline-flex',
  padding: '1.6rem 2rem',
  alignItems: 'center',
  borderRadius: '4px',
  border: '0.5px solid',
  borderColor: vars.colors.gray02,
  backgroundColor: vars.colors.white,
  gap: '0.8rem',
  width: '100%',
});
