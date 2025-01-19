import { style } from '@vanilla-extract/css';

export const videoWrapperStyle = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1.6rem',
  justifyContent: 'center',
});

export const videoItemStyle = style({
  width: '33.5rem',
  textAlign: 'center',
  border: 'none',
});

export const iframeStyle = style({
  width: '100%',
});
