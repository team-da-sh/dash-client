import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const addInputBoxStyle = style({
  width: '100%',
  height: '5.2rem',
  backgroundColor: vars.colors.gray01,
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
