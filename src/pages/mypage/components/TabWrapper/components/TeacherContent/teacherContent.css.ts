import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const containerStyle = style({
  display: 'flex',
  flexDirection: 'column',
});

export const topContainerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  padding: '2rem',

  backgroundColor: vars.colors.gray01,
});

export const reviewContainerStyle = style({
  display: 'flex',
  padding: '2rem 1.6rem',
  gap: '0.4rem',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const classButtonStyle = style({
  position: 'fixed',
  right: '20px',
  bottom: '36px',

  display: 'flex',
  justifyContent: 'center',
  width: 'max-content',
  alignItems: 'center',
  gap: '0.2rem',
  padding: '1.2rem 1.6rem 1.2rem 1.2rem',

  borderRadius: '40px',
  backgroundColor: vars.colors.main04,
});
