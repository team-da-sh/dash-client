import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';



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
