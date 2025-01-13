import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/styles/theme.css';

export const containerStyle = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const inputStyle = recipe({
  base: {
    width: '100%',
    height: '5.2rem',
    border: 'none',
    borderRadius: '0.4rem',
    padding: '1.4rem 1.8rem',
    ...vars.fonts.b5,
    backgroundColor: vars.colors.gray01,

    '::placeholder': {
      color: vars.colors.gray05,
    },
  },
  variants: {
    isError: {
      true: {
        border: `1px solid ${vars.colors.alert03}`,
      },
      false: {
        border: `1px solid ${vars.colors.main04}`,
      },
    },
  },
});

export const helperTextStyle = recipe({
  base: {
    ...vars.fonts.b6,
    color: vars.colors.gray05,
  },
  variants: {
    isError: {
      true: {
        color: vars.colors.alert03,
      },
      false: {
        color: vars.colors.main04,
      },
    },
  },
});
