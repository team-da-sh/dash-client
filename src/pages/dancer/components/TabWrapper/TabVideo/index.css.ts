import { style } from '@vanilla-extract/css';

export const videoWrapperStyle = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1.6rem',
  justifyContent: 'center',
});

export const videoItemStyle = style({
  position: 'relative',
  width: '33.5rem',
  textAlign: 'center',
  border: 'none',
  paddingBottom: '56.25%',
});

export const iframeStyle = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
});
