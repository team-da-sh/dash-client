import { style } from '@vanilla-extract/css';

export const iframeStyle = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
});

export const sectionStyle = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1.6rem',
  justifyContent: 'center',
});

export const emptyMessageStyle = style({
  display: 'flex',
  justifyContent: 'center',
  paddingBottom: '1.4rem',
});

export const videoWrapperStyle = style({
  position: 'relative',
  width: '33.5rem',
  height: '18.8rem',
});
