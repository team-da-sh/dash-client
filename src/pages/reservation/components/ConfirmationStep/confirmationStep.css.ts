import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const mainContainer = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '4.1rem 2.8rem 0 2rem',
  width: '100%',
});

export const gapBetweenHeadAndNote = style({
  marginTop: '0.8rem',
});

export const gapBeforeSection = style({
  marginTop: '4rem',
});

export const confirmSection = style({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '1.6rem',
  padding: '2.2rem 0 2.2rem 2.4rem',
  gap: '1.4rem',

  borderRadius: '11px',
  border: `1px solid ${vars.colors.gray02}`,
  backgroundColor: vars.colors.gray01,
});

export const rowItem = style({
  display: 'flex',
  alignItems: 'center',
});

export const rowItemTitle = style({
  width: '4.9rem',
  marginRight: '2.8rem',
  whiteSpace: 'nowrap',
});

export const copyButtonStyle = style({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
});

export const confirmButtonContainer = style({
  position: 'fixed',
  bottom: '0',
  padding: '2.4rem 2rem',
  width: '100%',
});

export const underline = style({
  textDecoration: 'underline',
});

export const breakWord = style({
  wordBreak: 'break-word',
});
