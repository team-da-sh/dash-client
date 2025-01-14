import { recipe } from '@vanilla-extract/recipes';

export const flexStyle = recipe({
  base: {
    display: 'flex',
  },
  variants: {
    direction: {
      row: { flexDirection: 'row' },
      column: { flexDirection: 'column' },
    },
    align: {
      flexStart: { alignItems: 'flex-start' },
      flexEnd: { alignItems: 'flex-end' },
      center: { alignItems: 'center' },
      stretch: { alignItems: 'stretch' },
      baseline: { alignItems: 'baseline' },
    },
    justify: {
      flexStart: { justifyContent: 'flex-start' },
      flexEnd: { justifyContent: 'flex-end' },
      center: { justifyContent: 'center' },
      spaceBetween: { justifyContent: 'space-between' },
      spaceAround: { justifyContent: 'space-around' },
      spaceEvenly: { justifyContent: 'space-evenly' },
    },
    wrap: {
      nowrap: { flexWrap: 'nowrap' },
      wrap: { flexWrap: 'wrap' },
      wrapReverse: { flexWrap: 'wrap-reverse' },
    },
    grow: {
      grow0: { flexGrow: 0 },
      grow1: { flexGrow: 1 },
    },
  },
  defaultVariants: {
    direction: 'row',
    align: 'flexStart',
    justify: 'flexStart',
    wrap: 'nowrap',
    grow: 'grow0',
  },
});
