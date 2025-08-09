import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const ulStyle = style({
  display: 'flex',
  flexDirection: 'column',

  width: '100%',

  padding: '2.4rem 1.6rem 4.7rem 1.6rem',
  gap: '0.8rem',

  backgroundColor: vars.colors.white,
});

export const listStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  color: vars.colors.gray09,

  ...vars.fonts.b2_m,
});

export const dividerStyle = style({
  marginTop: '2rem',
  marginBottom: '1.2rem',
});

export const disabledStyle = style({
  cursor: 'not-allowed',

  color: vars.colors.gray04,
});
