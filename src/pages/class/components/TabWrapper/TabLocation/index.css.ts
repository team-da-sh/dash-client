import { style } from '@vanilla-extract/css';

export const streetAddressStyle = style({
  whiteSpace: 'pre-line',
});

export const addressTitleStyle = style({
  whiteSpace: 'nowrap',
});

export const emptyStyle = style({
  display: 'flex',
  alignItems: 'center',
  margin: '0 auto',
  paddingTop: '0.8rem',
});
