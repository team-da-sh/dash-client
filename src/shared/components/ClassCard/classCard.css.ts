import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const cardContainerStyle = style({
  width: '100%',

  padding: '2rem',
  borderRadius: 4,
  border: `1px solid ${vars.colors.gray03}`,

  backgroundColor: vars.colors.white,
});

export const cardImageStyle = style({
  width: '8.4rem',
  height: '8.4rem',
  flexShrink: 0,

  objectFit: 'cover',

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

export const askTextStyle = style({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',

  marginTop: '1.2rem',

  cursor: 'pointer',
});

export const dividerStyle = style({
  margin: '1.2rem 0',
});
