import { globalStyle, style } from '@vanilla-extract/css';

/* CSS Variables */
globalStyle(':root', {
  vars: {
    '--min-width': '375px',
    '--max-width': '430px',
  },
});

/* HTML & Body additional styles */
globalStyle('html, body', {
  scrollbarWidth: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  scrollBehavior: 'smooth',
  background: '#dcdcdc',
});

/* Scrollbar Hide */
globalStyle('::-webkit-scrollbar', {
  display: 'none',
});

/* Root Container */
export const rootStyle = style({
  minWidth: 'var(--min-width)',
  maxWidth: 'var(--max-width)',
  width: '100%',
  minHeight: '100dvh',
  backgroundColor: '#fff',
  margin: '0 auto',

  '@media': {
    '(min-width: 430px)': {
      boxShadow: '0 0 2px rgba(0, 0, 0, 0.4)',
    },
  },
});
