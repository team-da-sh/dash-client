import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const addButtonStyle = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '100%',
  height: '5.2rem',
  backgroundColor: vars.colors.gray01,

  cursor: 'pointer',
});

export const careerFlexStyle = style({
  marginBottom: '2.8rem',
});

export const checkboxStyle = style({
  width: '2rem',
  height: '2rem',
  outline: `1px solid ${vars.colors.gray07}`,
  borderRadius: '0.2rem',
  cursor: 'pointer',
});

export const inputContainerStyle = style({
  width: '100%',
  position: 'relative',
});
