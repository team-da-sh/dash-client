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
  padding: '1.8rem 2.7rem 2.4rem 2.2rem',
  marginBottom: '1.2rem',
  gap: '0.4rem',
  borderRadius: '4px',
  backgroundColor: vars.colors.white,
});

export const textPrimaryStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
});

export const dividerStyle = style({
  margin: '1.8rem 0 1.5rem',
});

export const noticeListStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.4rem',
  paddingRight: '2.2rem',
});

export const noticeTitleStyle = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '0.6rem',
  marginBottom: '1rem',
  alignItems: 'center',
});

export const groupListStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
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
