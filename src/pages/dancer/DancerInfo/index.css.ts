import { style } from '@vanilla-extract/css';

export const classTitleStyle = style({
  paddingLeft: '2rem',
});

export const rowScrollStyle = style({
  display: 'flex',
  flexDirection: 'row',
  
  width: '100%',
  gap: '0.8rem',
  paddingBottom: '3.6rem',

  overflowX: 'auto',
});

export const classItemStyle = style({
  flex: '0 0 auto',
});

export const firstClassItemStyle = style({
  marginLeft: '2rem',
});

export const lastClassItemStyle = style({
  marginRight: '2rem',
});
