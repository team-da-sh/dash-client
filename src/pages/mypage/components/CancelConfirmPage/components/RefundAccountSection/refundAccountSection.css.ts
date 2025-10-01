import { style } from '@vanilla-extract/css';

export const containerStyle = style({
  width: '100%',
});

export const titleContainerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
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
  padding: '12px 16px',
  backgroundColor: 'white',
  borderRadius: '8px',
  cursor: 'pointer',
  width: '100%',
});

export const bankInfoContainerStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
});

export const bankSelectImageStyle = style({
  width: '2.4rem',
  height: '2.4rem',
  objectFit: 'contain',
});
