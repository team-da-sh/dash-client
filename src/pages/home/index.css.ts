import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const containerStyle = style({
  overflow: 'auto',
  whiteSpace: 'nowrap',
});

export const carouselContainerStyle = style({
  minHeight: '37.5rem',
});

export const rowScrollwrapperStyle = style({
  width: '100%',

  paddingLeft: '2rem',
});

export const recommandClassWrapperStyle = style({
  width: '100%',

  paddingLeft: '2rem',
  marginTop: '3.2rem',
});

export const dancerListWrapperstyle = style({
  width: '100%',

  paddingLeft: '2rem',
  marginTop: '4.8rem',
});

export const myPageContainerStyle = style({
  position: 'relative',
});

export const deadlineClassWrapperStyle = style({
  width: '100%',

  paddingLeft: '2rem',
  marginTop: '6.1rem',
});

export const overlayStyle = style({
  position: 'fixed',
  top: 0,
  left: 0,

  width: '100%',
  height: '100%',

  backgroundColor: vars.colors.black70,
  opacity: 0,
  visibility: 'hidden',
  transition: 'opacity 0.5s ease-in-out',
  zIndex: 3,
});

export const overlayActiveStyle = style({
  opacity: 1,
  visibility: 'visible',
});
