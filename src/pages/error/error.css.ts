import { style } from '@vanilla-extract/css';

export const containerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  padding: '6rem 2rem 12rem 2rem',
  textAlign: 'center',
});

export const buttonContainerStyle = style({
  position: 'fixed',
  bottom: 0,
  width: '100%',
  padding: '2.4rem 2rem',
});

export const headerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.4rem',
  marginBottom: '2.9rem',
});

export const messageSectionStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.2rem',
});

export const errorIconStyle = style({
  width: '100%',
});
