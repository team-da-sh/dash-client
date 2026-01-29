import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const containerStyle = style({
  padding: '2.8rem 0 2.4rem 2rem',

  backgroundColor: vars.colors.gray01,
});

export const textStyle = style({
  textDecoration: 'none',
});

export const linkWrapperStyle = style({
  display: 'flex',
  gap: '1.2rem',
  alignItems: 'center',
  marginTop: '1.4rem',
  marginBottom: '1.2rem',
});

export const infoWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
});

export const infoRowStyle = style({
  display: 'flex',
  gap: '0.8rem',
  alignItems: 'center',
});
