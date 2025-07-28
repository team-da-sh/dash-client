import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/shared/styles/theme.css';

export const allContainerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
  width: '100%',
});

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

export const optionalContainerStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
});

export const lengthContainerStyle = style({
  display: 'flex',
  gap: '0.2rem',
  marginLeft: 'auto',
});

export const lengthTextStyle = recipe({
  base: {
    color: vars.colors.gray04,
  },
  variants: {
    defineLengthState: {
      focus: {
        color: vars.colors.main04,
      },
      error: {
        color: vars.colors.alert03,
      },
      filled: {
        color: vars.colors.gray09,
      },
    },
  },
});
