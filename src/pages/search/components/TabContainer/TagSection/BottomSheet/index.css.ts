import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const bottomSheet = style({
  overflow: 'hidden',
});

export const overlayStyle = style({
  position: 'fixed',
  left: '50%',
  transform: 'translateX(-50%)',
  bottom: 0,
  height: '100vh',
  width: '100%',
  background: vars.colors.black70,
  zIndex: vars.zIndex.one,
  cursor: 'pointer',
});

export const bottomSheetStyle = style({
  position: 'fixed',
  height: '50rem',
  width: '100%',
  bottom: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  background: vars.colors.white,
  padding: '3.4rem 2rem 2.4rem 2rem',
  zIndex: vars.zIndex.two,
  borderRadius: '16px 16px 0 0',
});

export const genreButtonContainerStyle = style({
  display: 'flex',
  gap: '1.2rem',
  flexWrap: 'wrap',
  paddingTop: '1.2rem',
  paddingBottom: '18.44rem',
});
