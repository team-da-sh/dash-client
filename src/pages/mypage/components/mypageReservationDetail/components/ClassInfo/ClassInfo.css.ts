import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const infoContainerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  margin: '0 auto',
  padding: '2rem',
  width: '100%',

  background: vars.colors.white,
  borderRadius: '4px',
});

export const textLabelStyle = style({
  width: '4.4rem',
  whiteSpace: 'nowrap',
});

export const lessonNameStyle = style({
  width: '100%',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const cardImageStyle = style({
  width: '8.4rem',
  height: '8.4rem',
  flexShrink: 0,

  objectFit: 'cover',

  borderRadius: 3.4,

  backgroundColor: vars.colors.gray04,
});
