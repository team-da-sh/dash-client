import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/shared/styles/theme.css';

export const containerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
  width: '100%',
  padding: '1.2rem 0 3.2rem 0',
});

export const textAreaStyle = recipe({
  base: {
    width: '100%',
    padding: '1.6rem 1.8rem',
    height: '5.2rem',
    resize: 'none',
    borderRadius: '4px',
    backgroundColor: vars.colors.gray01,
    ...vars.fonts.b2_sb_long,

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
        outline: `1px solid ${vars.colors.alert03}`,
      },
    },
  },
});

export const detailLengthTextStyle = style({
  alignSelf: 'flex-end',
});

export const counterColorStyle = recipe({
  base: {
    color: vars.colors.gray04,
  },
  variants: {
    color: {
      alert3: { color: vars.colors.alert03 },
      main4: { color: vars.colors.main04 },
      gray9: { color: vars.colors.gray09 },
      gray4: { color: vars.colors.gray04 },
    },
  },
  defaultVariants: {
    color: 'gray4',
  },
});
