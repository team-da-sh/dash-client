import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const layoutStyle = style({
  height: 'calc(100dvh - 6rem)',

  backgroundColor: vars.colors.gray01,
});

export const containerStyle = style({
  display: 'flex',
  flexDirection: 'column',

  padding: '0rem 2rem',
  gap: '1.8rem',
});

export const mainTextStyle = style({
  padding: '2rem 0rem 1.6rem 0rem',
});

export const wrapperStyle = style({
  display: 'flex',

  width: '100%',
  justifyContent: 'center',
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

export const applyDateStyle = style({
  display: 'flex',
  justifyContent: 'flex-end',

  marginTop: '1.2rem',
});
