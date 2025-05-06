import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const textAreaStyle = style({
  width: '100%',
  padding: '1.6rem 1.8rem',
  height: '5.4rem',
  overflow: 'hidden',
  resize: 'none',
  borderRadius: '4px',
  backgroundColor: vars.colors.gray01,
  ...vars.fonts.b2_sb_long,

  '::placeholder': {
    color: vars.colors.gray05,
  },

  ':focus': {
    outline: `1px solid ${vars.colors.main04}`,
  },
});
