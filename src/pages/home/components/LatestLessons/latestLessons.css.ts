import { style } from '@vanilla-extract/css';

export const containerStyle = style({
  width: '100%',

  marginTop: '3.2rem',
});

export const latestLessonWrapperStyle = style({
  display: 'flex',
  gap: '0.8rem',
  marginTop: '2rem',
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
