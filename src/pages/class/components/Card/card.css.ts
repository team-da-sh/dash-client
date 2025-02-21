import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const cardStyle = style({
  display: 'inline-flex',
  alignItems: 'center',

  width: '100%',
  padding: '1.6rem 2rem',
  gap: '0.8rem',

  borderRadius: '4px',
  border: `1px solid ${vars.colors.gray02}`,
  borderColor: vars.colors.gray02,
  backgroundColor: vars.colors.white,
});
