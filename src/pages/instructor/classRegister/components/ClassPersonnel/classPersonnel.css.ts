import { style } from '@vanilla-extract/css';

export const personnelContainerStyle = style({
  width: '100%',
  position: 'relative',
});

export const personnelTextStyle = style({
  position: 'absolute',
  right: '1.8rem',
  top: '50%',
  transform: 'translateY(-50%)',
});
