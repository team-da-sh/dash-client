import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/shared/styles/theme.css';

export const containerStyle = recipe({
  base: {
    display: 'flex',
    gap: '0.8rem',

    width: '100%',
    height: '5.2rem',
    padding: '1.4rem 1.8rem',

    border: 'none',
    borderRadius: '4px',
    backgroundColor: vars.colors.gray01,
  },
  variants: {
    defineInputState: {
      focus: {
        outline: `1px solid ${vars.colors.main04}`,
      },
      error: {
        outline: `1px solid ${vars.colors.alert03}`,
      },
    },
  },
});

export const inputStyle = style({
  width: '100%',
  ...vars.fonts.b2_sb_long,

  '::placeholder': {
    color: vars.colors.gray05,
  },
});
