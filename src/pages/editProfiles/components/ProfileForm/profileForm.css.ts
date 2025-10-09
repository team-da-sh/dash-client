import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/shared/styles/theme.css';

export const form = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'space-between',
});

export const imageSection = style({
  display: 'flex',
  justifyContent: 'center',
});

export const submitSection = style({
  padding: '2.4rem 0',
});

export const fieldStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
  height: '12.4rem',
  padding: '1.2rem 0',
});

export const inputRow = style({
  display: 'flex',
  gap: '0.4rem',
});

export const input = style({
  flex: 1,
});

export const buttonStyle = recipe({
  base: {
    width: '8.2rem',
    height: '5.2rem',
    padding: '0.3rem 1.6rem',
    whiteSpace: 'nowrap',
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
