import { style } from '@vanilla-extract/css';

export const flexCustomStyle = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
});

export const successButtonContainer = style({
  position: 'fixed',
  bottom: '0',
  padding: '2.4rem 2rem',
  width: '100%',
});

export const sectionStyle = style({
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: '2rem',
  paddingRight: '2rem',
  width: '100%',
});
