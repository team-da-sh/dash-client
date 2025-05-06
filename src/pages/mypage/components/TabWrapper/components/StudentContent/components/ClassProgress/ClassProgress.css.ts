import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const containerStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  width: '100%',
  padding: '1.4rem 2.4rem',

  borderRadius: '4px',
  border: `1px solid ${vars.colors.gray02}`,
  backgroundColor: vars.colors.white,
});

export const wrapperStyle = style({
  display: 'flex',
  width: '6.3rem',
  alignItems: 'center',
  gap: '0.8rem',
});
