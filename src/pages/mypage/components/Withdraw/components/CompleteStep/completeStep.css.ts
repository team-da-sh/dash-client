import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const containerStyle = style({
  padding: '4.4rem 2rem 0',
});

export const descriptionStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.6rem',
  marginTop: '0.8rem',
  marginBottom: '4.4rem',
});

export const boxStyle = style({
  display: 'grid',
  gridTemplateColumns: '5rem 1fr',
  rowGap: '1.4rem',
  columnGap: '2.8rem',
  padding: '1.8rem 2.4rem',

  borderRadius: '10px',
  border: `1px solid ${vars.colors.gray02}`,
  backgroundColor: vars.colors.gray01,
});

export const boxValueStyle = style({
  wordBreak: 'break-word',
});

export const buttonContainerStyle = style({
  position: 'fixed',
  bottom: 0,
  width: '100%',
  padding: '2.4rem 2rem',
});
