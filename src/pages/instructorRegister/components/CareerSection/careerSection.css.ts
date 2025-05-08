import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const containerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
  width: '100%',

  padding: '1.2rem 0',
});

export const addButtonStyle = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '100%',
  height: '5.2rem',
  backgroundColor: vars.colors.gray01,

  cursor: 'pointer',
});

export const checkboxStyle = style({
  width: '2rem',
  height: '2rem',
  outline: `1px solid ${vars.colors.gray06}`,
  borderRadius: '0.2rem',
  cursor: 'pointer',
});

export const inputContainerStyle = style({
  width: '100%',
  position: 'relative',
});
