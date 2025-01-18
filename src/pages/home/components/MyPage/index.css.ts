import { style } from '@vanilla-extract/css';

export const layoutStyle = style({
  display: 'flex',
  justifyContent: 'end',

  width: '100%',
  height: '100%',
});

export const containerStyle = style({
  width: '31.2rem',
  height: '100%',

  border: '1px solid blue',
});
