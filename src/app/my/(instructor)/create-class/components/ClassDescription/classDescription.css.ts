import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const textareaStyle = style({
  width: '100%',
  padding: '1.6rem 1.8rem',
  height: '9.8rem',
  overflow: 'hidden',
  resize: 'none',
  borderRadius: '4px',
  backgroundColor: vars.colors.gray01,
  outline: 'none',
  ...vars.fonts.b2_sb_long,

  '::placeholder': {
    color: vars.colors.gray05,
  },

  ':focus': {
    outline: `1px solid ${vars.colors.main04}`,
  },
});

export const textareaErrorStyle = style({
  width: '100%',
  padding: '1.6rem 1.8rem',
  height: '9.8rem',
  overflow: 'hidden',
  resize: 'none',
  borderRadius: '4px',
  backgroundColor: vars.colors.gray01,
  outline: `1px solid ${vars.colors.alert03}`,
  ...vars.fonts.b2_sb_long,

  '::placeholder': {
    color: vars.colors.gray05,
  },

  ':focus': {
    outline: `1px solid ${vars.colors.alert03}`,
  },
});

export const containerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  width: '100%',
  marginBottom: '4rem',
});

export const textareaWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
});

export const textareaFooterStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
});
