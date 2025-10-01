import { keyframes, style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const spinnerStyle = style({
  width: '30rem',
  height: '30rem',
  border: `5px solid ${vars.colors.gray02}`,
  borderBottomColor: 'transparent',
  borderRadius: '50%',
  display: 'inline-block',
  boxSizing: 'border-box',
  animation: `${spin} 1s linear infinite`,
});
