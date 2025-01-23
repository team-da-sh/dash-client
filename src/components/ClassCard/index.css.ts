import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const cardContainerStyle = style({
  width: '100%',

  padding: '1.6rem 2rem',
  borderRadius: 4,
  border: `1px solid ${vars.colors.gray03}`,

  backgroundColor: vars.colors.white,
});

export const cardImageStyle = style({
  width: '8.4rem',
  height: '8.4rem',

  borderRadius: 3.4,

  backgroundColor: vars.colors.gray04,
});
