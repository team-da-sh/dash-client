import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const containerStyle = style({
  width: '100%',
  height: '4.4rem',
  padding: '1rem 1.2rem 1rem 1.6rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '0.6rem',

  borderRadius: '9rem',
  backgroundColor: vars.colors.gray01,
});

export const inputStyle = style({
  width: '100%',
  ...vars.fonts.b2_sb,

  '::placeholder': {
    color: vars.colors.gray05,
  },
});
