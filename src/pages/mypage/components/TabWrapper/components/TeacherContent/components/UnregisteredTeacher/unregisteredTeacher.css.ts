import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const layoutStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2rem',

  padding: '2rem 0rem 3.2rem 0rem',
});

export const textConatinerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.2rem',
});

export const textStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const buttonStyle = style({
  textAlign: 'center',
  padding: '1.2rem 1.6rem',

  borderRadius: '40px',
  backgroundColor: vars.colors.main04,
});
