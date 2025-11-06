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
  marginBottom: '0.4rem',
});

export const descriptionStyle = style({
  marginBottom: '2.4rem',
});

export const noticeCardStyle = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '2.4rem 2.7rem 2.4rem 2rem',
  marginBottom: '1.2rem',
  borderRadius: '4px',
  backgroundColor: vars.colors.white,
});

export const textPrimaryStyle = style({
  marginBottom: '0.4rem',
});

export const textSecondaryStyle = style({
  marginBottom: '2rem',
});

export const bulletListStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
  color: vars.colors.gray10,
  ...vars.fonts.b3_m_narrow,
});

export const bulletItemStyle = style({
  position: 'relative',
  paddingLeft: '1.6rem',
  selectors: {
    '&::before': {
      content: '"•"',
      position: 'absolute',
      left: '0.4rem',
      top: '0',
      fontSize: '1.2em',
    },
  },
});

export const legalNoticeStyle = style({
  marginTop: '2.4rem',
});

export const agreeSectionStyle = style({
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  gap: '1.4rem',
  padding: '1.9rem 1.5rem',
  marginBottom: '13.1rem',
  borderRadius: '4px',
  backgroundColor: vars.colors.white,
  cursor: 'pointer',
  WebkitTapHighlightColor: 'transparent',
});
