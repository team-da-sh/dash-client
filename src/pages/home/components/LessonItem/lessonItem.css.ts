import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const classImageStyle = style({
  minWidth: '16.4rem',
  height: '12.3rem',

  aspectRatio: '3/4',
  objectFit: 'cover',
  borderRadius: '4px',
});

export const titleStyle = style({
  maxWidth: '16.4rem',
  maxHeight: '4rem',

  whiteSpace: 'normal',
  overflow: 'hidden',
  wordBreak: 'break-all',
});

export const teacherImageStyle = style({
  width: '2.4rem',
  height: '2.4rem',

  objectFit: 'cover',
  borderRadius: '100%',
});

export const wrapperStyle = style({
  position: 'relative',
});

export const deadlineTagStyle = style({
  position: 'absolute',

  top: '0.8rem',
});

export const genreWrapperStyle = style({
  width: '100%',

  marginTop: '4.4rem',
  padding: '3.2rem 2rem 3.8rem 2rem',

  backgroundColor: vars.colors.gray01,
});

export const linkStyle = style({
  textDecoration: 'none',

  selectors: {
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },

    '&:focus-visible': {
      outline: 'none',
    },

    '&:focus-visible::after': {
      outline: '2px solid #007bff',
      outlineOffset: '2px',
    },
  },
});
