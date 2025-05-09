import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const addInputBoxStyle = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '100%',
  height: '5.2rem',
  backgroundColor: vars.colors.gray01,

  cursor: 'pointer',
});
