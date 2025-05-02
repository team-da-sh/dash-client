import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const containerStyle = style({
  display: 'flex',
  flexDirection: 'column',

  backgroundColor: vars.colors.gray01,
});

export const topContainerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  padding: '2rem',

  backgroundColor: vars.colors.gray01,
});

export const menuButtonContainerStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  height: '10.6rem',
  padding: '2.8rem 3.2rem',

  backgroundColor: vars.colors.white,
});
