import { style } from '@vanilla-extract/css';

export const loadingContainerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: '19.5rem',
  paddingRight: '11.7rem',
  paddingBottom: '27.3rem',
  paddingLeft: '11.8rem',
});

export const loadingInnerWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.3rem',
});
