import { style } from '@vanilla-extract/css';

export const viewportStyle = style({
  overflow: 'hidden',
  width: '100%',
});

export const containerStyle = style({
  display: 'flex',

  width: '100%',
  height: '100%',
  overflow: 'hidden',
});
