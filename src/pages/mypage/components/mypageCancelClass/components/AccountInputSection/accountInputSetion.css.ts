import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const containerStyle = style({
  marginTop: '2.4rem',
});

export const titleContainerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.4rem',
});

export const inputContainerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const bankSelectContainerStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  padding: '10px 18px',
  borderRadius: '4px',
  backgroundColor: vars.colors.white,
});

export const bankInfoContainerStyle = style({
  display: 'flex',
  alignItems: 'center',
});

export const bankSelectImageStyle = style({
  width: '2.2rem',
  height: '2.2rem',
  objectFit: 'contain',
});
