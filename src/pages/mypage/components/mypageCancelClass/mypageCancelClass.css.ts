import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const layoutStyle = style({
  height: '100dvh',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  backgroundColor: vars.colors.gray01,
});

export const containerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});

export const scrollAreaStyle = style({
  padding: '2rem 2rem 2.4rem 2rem',
});

export const titleWrapperStyle = style({
  paddingBottom: '2rem',
});

export const reservationListWrapperStyle = style({
  marginBottom: '2.6rem',
});

export const depositButtonWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  marginBottom: '2rem',
});

export const buttonStyle = style({
  width: '100%',
});
