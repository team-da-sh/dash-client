import { style } from '@vanilla-extract/css';

export const textStyle = style({
  overflowWrap: 'break-word',
  wordBreak: 'break-all',
});

export const sectionStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const emptyMessageStyle = style({
  display: 'flex',
  justifyContent: 'center',
  paddingBottom: '1.4rem',
});