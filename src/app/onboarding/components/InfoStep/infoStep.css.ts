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

export const buttonStyle = recipe({
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
    ...vars.fonts.b2_sb_long,
  },
  variants: {
    type: {
      default: {},
      resend: {
        border: `1px solid ${vars.colors.gray08}`,
        background: vars.colors.white,
        color: vars.colors.gray09,
      },
    },
  },
  defaultVariants: {
    type: 'default',
  },
});

export const timerStyle = style({
  display: 'flex',
  alignItems: 'center',
});
