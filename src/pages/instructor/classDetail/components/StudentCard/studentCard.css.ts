import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const cardContainerStyle = style({
  display: 'flex',
  alignItems: 'center',

  width: '100%',
  height: '6.4rem',

  padding: '1.6rem 2rem 1.4rem 2.4rem',
  border: `1px solid ${vars.colors.gray03}`,
  borderRadius: '4px',

  backgroundColor: vars.colors.white,
});

export const cardNumberStyle = style({
  marginRight: '2.4rem',
});
