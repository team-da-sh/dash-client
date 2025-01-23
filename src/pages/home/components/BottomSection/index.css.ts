import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const ulStyle = style({
  display: 'flex',
  flexDirection: 'column',

  width: '100%',

  padding: '2.4rem 2rem 2.8rem 2rem',
  gap: '0.8rem',
});

export const listStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  color: vars.colors.gray09,

  ...vars.fonts.b2,
});

export const dividerStyle = style({
  marginTop: '0.8rem',
  marginBottom: '0.8rem',
});

export const disabledStyle = style({
  cursor: 'not-allowed',

  color: vars.colors.gray04,
});
