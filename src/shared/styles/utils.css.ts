import { style } from '@vanilla-extract/css';

export const hideScrollbar = style({
  /* IE and Edge */
  msOverflowStyle: 'none',
  /* Firefox */
  scrollbarWidth: 'none',
  /* Chrome, Safari, Opera */
  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
});
