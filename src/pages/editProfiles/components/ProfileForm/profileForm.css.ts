import { style } from '@vanilla-extract/css';

export const formWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'space-between',
});

export const imageWrapperStyle = style({
  display: 'flex',
  justifyContent: 'center',
});

export const buttonWrapperStyle = style({
  padding: '2.4rem 0',
});
