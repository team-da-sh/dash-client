import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const cardContainerStyle = style({
  width: '100%',

  padding: '1.6rem 2rem',
  borderRadius: 4,
  border: `1px solid ${vars.colors.gray03}`,

  backgroundColor: vars.colors.white,
});

export const cardImageStyle = style({
  width: '8.4rem',
  height: '8.4rem',
  flexShrink: 0,

  borderRadius: 3.4,

  backgroundColor: vars.colors.gray04,
});

export const cardContentStyle = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
  overflow: 'hidden',

  width: '100%',
});

export const lessonNameStyle = style({
  width: '100%',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});
