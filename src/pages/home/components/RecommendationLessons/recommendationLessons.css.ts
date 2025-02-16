import { style } from '@vanilla-extract/css';

export const containerStyle = style({
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

export const recommandLessonWrapperStyle = style({
  width: '100%',

  marginTop: '3.2rem',
});
