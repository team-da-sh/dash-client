import { style } from '@vanilla-extract/css';

export const timeStepWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
});

export const timeStepMessageWrapperStyle = style({
  paddingTop: '0.8rem',
});

export const timeStepControlsRowStyle = style({
  display: 'flex',
  justifyContent: 'center',
  gap: '1rem',
  paddingTop: '1.6rem',
  paddingBottom: '2.4rem',
  width: '100%',
});

export const timeStepTagListStyle = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.8rem',
  paddingTop: '1.6rem',
});
