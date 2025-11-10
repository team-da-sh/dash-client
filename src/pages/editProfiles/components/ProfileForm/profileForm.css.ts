import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/shared/styles/theme.css';

export const formStyle = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'space-between',
});

export const imageSectionStyle = style({
  display: 'flex',
  justifyContent: 'center',
});

export const submitSectionStyle = style({
  padding: '2.4rem 0',
});

export const fieldStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
  height: '12.4rem',
  padding: '1.2rem 0',
});

export const inputRowStyle = style({
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
    borderRadius: '4px',
    ...vars.fonts.b2_sb_long,
  },
  variants: {
    type: {
      default: {
        background: vars.colors.gray04,
        color: vars.colors.white,
        border: `1px solid ${vars.colors.gray04}`,

        selectors: {
          '&:not(:disabled)': {
            background: vars.colors.main04,
            border: `1px solid ${vars.colors.main04}`,
          },
        },
      },
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
