import { style } from '@vanilla-extract/css';
import { hideScrollbar } from '@/shared/styles/utils.css';

export const containerStyle = style([
  hideScrollbar,
  {
    display: 'flex',
    marginTop: '1.6rem',
    gap: '0.8rem',

    overflow: 'auto',
    whiteSpace: 'nowrap',

    padding: '0.4rem 0rem',

    selectors: {
      '&:first-of-type': {
        paddingLeft: '2rem',
      },
      '&:last-of-type': {
        paddingLeft: '2rem',
        paddingRight: '2rem',
      },
    },
  },
]);

export const titleStyle = style({
  paddingLeft: '2rem',
});

export const deadlineLessonWrapperStyle = style({
  width: '100%',

  marginTop: '3.2rem',
  marginBottom: '4.4rem',
});
