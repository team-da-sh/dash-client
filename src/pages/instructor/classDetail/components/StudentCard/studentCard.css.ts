import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const cardContainerStyle = style({
  display: 'flex',
  justifyContent: 'space-between',

  width: '100%',

  padding: '1.6rem 2rem 1.6rem 2rem',
  borderRadius: '4px',

  backgroundColor: vars.colors.white,
});

export const cardNumberStyle = style({
  marginRight: '2.4rem',
});

export const leftWrapper = style({
  display: 'flex',
  gap: '1.2rem',

  marginTop: '0.5rem',
});

export const infoWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.9rem',
});

export const indexStyle = style({
  lineHeight: '2rem',
});

export const nameWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
});

export const rightWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.8rem',
  alignItems: 'flex-end',

  minWidth: '13.2rem',
});

export const hiddenStyle = style({
  visibility: 'hidden',
  pointerEvents: 'none',
});
