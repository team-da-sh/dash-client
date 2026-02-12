import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/shared/styles/theme.css';

export const labelStyle = style({
  minWidth: '4.7rem',

  whiteSpace: 'nowrap',
});

export const containerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

export const wrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const inputWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '3.2rem',
  marginTop: '3.2rem',
  width: '100%',
});

export const numberWrapperStyle = style({
  display: 'flex',
  gap: '0.5rem',
});

export const inputStyle = style({
  flex: 1,
});

export const verificationButtonStyle = recipe({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    width: '8.2rem',
    height: '5.2rem',
    padding: '0.3rem 1.6rem',
    whiteSpace: 'nowrap',
    textAlign: 'center',
    border: '1px solid transparent',
    borderRadius: '4px',
    backgroundColor: vars.colors.main04,
    color: vars.colors.white,
    cursor: 'pointer',
    ...vars.fonts.b2_sb_long,

    selectors: {
      '&:disabled': {
        backgroundColor: vars.colors.gray05,
        cursor: 'default',
      },
    },
  },
  variants: {
    variant: {
      default: {},
      resend: {
        border: `1px solid ${vars.colors.gray08}`,
        backgroundColor: vars.colors.white,
        color: vars.colors.gray09,
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const timerStyle = style({
  display: 'flex',
  alignItems: 'center',
});
