import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/shared/styles/theme.css';

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
    borderRadius: '4px',
    padding: '1.4rem 1.8rem',
    ...vars.fonts.b5,
    backgroundColor: vars.colors.gray01,

    '::placeholder': {
      color: vars.colors.gray05,
    },
  },
  variants: {
    defineInputState: {
      focus: {
        outline: `1px solid ${vars.colors.main04}`,
      },
      error: {
        border: `1px solid ${vars.colors.alert03}`,
      },
      search: {
        borderRadius: '90px',
        padding: '1rem 4rem 1rem 4.6rem',
        ...vars.fonts.b2,
      },
    },
  },
});
