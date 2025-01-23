import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const layoutStyle = style({
  height: '100vh',

  backgroundColor: vars.colors.gray01,
});

export const containerStyle = style({
  display: 'flex',
  flexDirection: 'column',

  padding: '8.4rem 2rem 3.4rem 2rem',
});

export const cardStyle = style({
  padding: '2rem',
  marginTop: '1.6rem',

  borderRadius: '4px',

  backgroundColor: vars.colors.white,
});

export const classHeaderStyle = style({
  marginTop: '2rem',
  marginBottom: '1.6rem',
});

export const applicantHeaderStyle = style({
  marginTop: '3.2rem',
  marginBottom: '1.6rem',
});
