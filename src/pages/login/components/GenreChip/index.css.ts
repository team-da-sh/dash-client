import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const genreImageStyle = style({
  width: '8.4rem',
  height: '8.4rem',

  borderRadius: '100%',
});

export const genreCheckboxContainerStyle = style({
  cursor: 'pointer',
});

export const checkboxStyle = style({
  display: 'none',

  selectors: {
    '&:checked + div': {
      backgroundColor: vars.colors.black70,
    },
  },
});
