import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const cardStyle = style({
  display: 'flex',
  gap: '1.2rem',
});

export const cardContainerStyle = style({
  width: '100%',

  padding: '2rem',
  borderRadius: 4,

  backgroundColor: vars.colors.white,
});

export const cardImageStyle = style({
  width: '8.4rem',
  height: '8.4rem',
  flexShrink: 0,

  objectFit: 'cover',

  borderRadius: 3.4,

  backgroundColor: vars.colors.gray01,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
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

export const cardContentWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const tagWrapperStyle = style({
  display: 'flex',
  gap: '0.3rem',
});

export const infoWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
});

export const infoRowStyle = style({
  display: 'flex',
  gap: '0.8rem',
  alignItems: 'center',
});

export const headerWrapperStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const headerContentStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
});

export const footerWrapperStyle = style({
  display: 'flex',
  gap: '0.7rem',
  marginTop: '1.2rem',
});
