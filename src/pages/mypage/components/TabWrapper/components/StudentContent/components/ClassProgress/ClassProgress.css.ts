import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const containerStyle = style({
  width: '100%',
  padding: '0rem 2rem 2.3rem 2rem',

  backgroundColor: vars.colors.gray01,
});

export const progressStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  width: '100%',
  padding: '1.4rem 2.4rem',

  backgroundColor: vars.colors.white,
  borderRadius: '4px',
  border: `1px solid ${vars.colors.gray02}`,
});

export const wrapperStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '6.3rem',
  gap: '0.8rem',
});
