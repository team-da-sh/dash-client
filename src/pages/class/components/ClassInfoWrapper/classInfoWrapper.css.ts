import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const sectionContainer = style({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '2rem',
  paddingRight: '2rem',
  paddingBottom: '2.4rem',
  paddingLeft: '2rem',
});

export const tagWrapper = style({
  display: 'flex',
  marginBottom: '1.2rem',
  gap: '0.6rem',
});

export const classTitle = style({
  marginBottom: '1.8rem',
});

export const teacherWrapper = style({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '0.8rem',
  gap: '0.9rem',
});

export const profileStyle = style({
  width: '4rem',
  height: '4rem',

  borderRadius: '50%',
  objectFit: 'cover',
  backgroundColor: vars.colors.gray01,
});

export const priceWrapper = style({
  display: 'flex',
  justifyContent: 'flex-end',
  width: '100%',
  alignItems: 'center',
  gap: '0.8rem',
  marginBottom: '2.4rem',
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

export const cardItemStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '6rem',
  gap: '0.6rem',
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
