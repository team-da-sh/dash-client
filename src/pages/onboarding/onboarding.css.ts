import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/shared/styles/theme.css';

export const containerStyle = style({
  position: 'relative',
});

export const bodyWrapperStyle = style({
  padding: '4.1rem 2rem 10.2rem 2rem',
});

export const footerWrapperStyle = style({
  position: 'fixed',
  bottom: '0',
  zIndex: 5,

  width: '100%',
  padding: '2.4rem 2rem ',

  backgroundColor: vars.colors.white,
});

export const toastContainerStyle = style({
  display: 'flex',
  gap: '0.8rem',
  padding: '1.2rem 2rem',
  marginBottom: '6.8rem',
  width: '100%',

  borderRadius: '0.8rem',
  backgroundColor: vars.colors.gray10,
  color: vars.colors.white,

  ...vars.fonts.b2_m,
});

export const labelStyle = style({
  minWidth: '4.7rem',

  whiteSpace: 'nowrap',
});

export const innerContainerStyle = style({
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
  gap: '0.4rem',
});

export const inputStyle = style({
  flex: 1,
});

export const buttonStyle = recipe({
  base: {
    width: '8.2rem',
    height: '5.2rem',
    padding: '0.3rem 0.8rem',
    textAlign: 'center',
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
