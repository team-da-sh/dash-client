import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const sectionStyle = style({
  padding: '5.3rem 2rem 2.6rem 2rem',

  whiteSpace: 'nowrap',

  backgroundColor: vars.colors.white,
});

export const profileImageStyle = style({
  width: '7.2rem',
  height: '7.2rem',

  marginBottom: '0.9rem',
  borderRadius: '50%',
  backgroundColor: vars.colors.gray04,
  objectFit: 'cover',
});

export const disabledStyle = style({
  cursor: 'not-allowed',
});
