import { style } from '@vanilla-extract/css';

export const containerStyle = style({
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

export const dancerListWrapperstyle = style({
  width: '100%',

  marginTop: '4.8rem',
});
