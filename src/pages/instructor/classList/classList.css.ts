import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const layoutStyle = style({
  height: '100vh',

  backgroundColor: vars.colors.gray01,
});

export const containerStyle = style({
  padding: '8.4rem 2rem 3.4rem 2rem',
});

export const buttonStyle = style({
  width: '100%',

  padding: '0.8rem 0',

  border: `0.5px solid ${vars.colors.gray04}`,
  borderRadius: '4px',
  backgroundColor: vars.colors.gray01,

  color: vars.colors.gray05,
  ...vars.fonts.b1_sb,

  cursor: 'default',
});
