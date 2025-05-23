import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/shared/styles/theme.css';

export const textAreaContainerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
  width: '100%',
  padding: '1.2rem 0',
});

export const containerStyle = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',

    width: '100%',
    height: '5.2rem',
    padding: '1.4rem 1.8rem',

    border: 'none',
    borderRadius: '4px',
    backgroundColor: vars.colors.gray01,
  },
  variants: {
    isFocused: {
      true: {
        outline: `1px solid ${vars.colors.main04}`,
      },
    },
  },
});

export const prefixIconStyle = style({
  marginTop: '0.1rem',
});

export const inputStyle = style({
  width: '100%',
  ...vars.fonts.b2_sb_long,

  '::placeholder': {
    color: vars.colors.gray05,
  },
});
