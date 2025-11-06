import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const containerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '2.4rem 2rem',
  minHeight: 'calc(100dvh - 6rem)',
  backgroundColor: vars.colors.gray01,
});

export const titleStyle = style({
  marginBottom: '0.8rem',
});

export const descriptionStyle = style({
  marginBottom: '3.2rem',
});

export const noteStyle = style({
  display: 'flex',
  justifyContent: 'flex-end',
  marginBottom: '0.8rem',
});

export const reasonListStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.2rem',
  padding: '2.4rem',

  borderRadius: '4px',
  marginBottom: '13.1rem',
  backgroundColor: vars.colors.white,
});

export const reasonItemStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.4rem',

  cursor: 'pointer',
  WebkitTapHighlightColor: 'transparent',
});

export const etcGroupStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
});
