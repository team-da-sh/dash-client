import { style } from '@vanilla-extract/css';

export const errorContainerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.5rem',

  width: '100%',
  height: '12rem',
  maxHeight: '12rem',
});

export const buttonContainer = style({
  maxWidth: '12rem',
  width: '100%',
});
