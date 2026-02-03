import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const infoContainerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  margin: '0 auto',
  width: '100%',

  background: vars.colors.white,
  borderRadius: '4px',
});

export const textLabelStyle = style({
  width: '4.4rem',
  whiteSpace: 'nowrap',
});

export const contentWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
});

export const rowStyle = style({
  display: 'flex',
  gap: '1.2rem',
});

export const locationInfoStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
});

export const scheduleWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
});

export const scheduleItemStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
});
