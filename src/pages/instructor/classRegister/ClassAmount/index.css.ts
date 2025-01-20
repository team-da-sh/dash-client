import { style } from '@vanilla-extract/css';

export const amountContainerStyle = style({
  width: '100%',
  position: 'relative',
});

export const amountTextStyle = style({
  position: 'absolute',
  right: '1.8rem',
  top: '50%',
  transform: 'translateY(-50%)',
});
