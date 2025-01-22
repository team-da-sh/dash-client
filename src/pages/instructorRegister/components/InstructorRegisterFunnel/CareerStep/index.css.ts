import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const addInputBoxStyle = style({
  width: '100%',
  height: '5.2rem',
  backgroundColor: vars.colors.gray01,
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

export const inputIconStyle = style({
  position: 'absolute',
  right: '1.8rem',
  top: '50%',
  transform: 'translateY(-50%)',
});
