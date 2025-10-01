import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const containerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '4rem 2rem 0 2rem',
});

export const titleStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const inputContainerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
  marginTop: '3.2rem',
});

export const buttonContainerStyle = style({
  width: '100%',
  position: 'fixed',
  bottom: '0',
  padding: '2.4rem 2rem',
  backgroundColor: vars.colors.white,
});

export const bankSelectContainerStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  width: '100%',
  height: '5.2rem',

  padding: '1rem 1.8rem',
  backgroundColor: vars.colors.gray01,

  border: 'none',
  borderRadius: '4px',
});

export const bankInfoContainerStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
});

export const bankSelectImageStyle = style({
  width: '2.2rem',
  height: '2.2rem',
  objectFit: 'contain',
});
