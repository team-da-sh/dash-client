import { style } from '@vanilla-extract/css';

export const containerStyle = style({
  display: 'flex',
  marginTop: '1.6rem',
  gap: '0.8rem',

  overflow: 'auto',
  whiteSpace: 'nowrap',

  selectors: {
    '&:first-of-type': {
      paddingLeft: '2rem',
    },
    '&:last-of-type': {
      paddingLeft: '2rem',
      paddingRight: '2rem',
    },
  },
});

export const titleStyle = style({
  paddingLeft: '2rem',
});

export const deadlineLessonWrapperStyle = style({
  width: '100%',

  marginTop: '6.1rem',
});
