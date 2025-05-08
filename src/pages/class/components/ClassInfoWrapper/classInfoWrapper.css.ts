import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const profileStyle = style({
  width: '4rem',
  height: '4rem',

  borderRadius: '50%',
  objectFit: 'cover',
  backgroundColor: vars.colors.gray01,
});

export const priceTextStyle = style({
  display: 'flex',
  position: 'relative',

  alignItems: 'center',
  gap: '0.2rem',

  bottom: '0.2rem',
});

export const cardStyle = style({
  justifyContent: 'center',
  gap: '3.6rem',
  border: `1px solid ${vars.colors.gray02}`,
});

export const reviewTextStyle = style({
  display: 'inline-flex',
  alignItems: 'baseline',
  gap: '0.2rem',
});

export const reviewSubText = style({
  position: 'relative',
  bottom: '0.1rem',
});
