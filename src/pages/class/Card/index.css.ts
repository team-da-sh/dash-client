import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const cardStyle = style({
  width: '100%',
  display: 'inline-flex',
  padding: '1.6rem 2rem',
  alignItems: 'center',
  borderRadius: '4px',
  border: `1px solid ${vars.colors.gray02}`,
  borderColor: vars.colors.gray02,
  backgroundColor: vars.colors.white,
  gap: '0.8rem',
});
