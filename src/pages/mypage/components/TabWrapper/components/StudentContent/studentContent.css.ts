import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const containerStyle = style({
  display: 'flex',
  flexDirection: 'column',

  backgroundColor: vars.colors.gray01,
});

export const topContainerStyle = style({
  display: 'flex',
  flexDirection: 'column',

  backgroundColor: vars.colors.gray01,
});

export const menuButtonContainerStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  height: '10.6rem',
  padding: '2.8rem 3.2rem',

  backgroundColor: vars.colors.white,
});

export const noUnderlineStyle = style({
  textDecoration: 'none',
  color: 'inherit',
  pointerEvents: 'none',
  cursor: 'default',

  selectors: {
    '&::-webkit-any-link': {
      textDecoration: 'none',
    },
  },
});
