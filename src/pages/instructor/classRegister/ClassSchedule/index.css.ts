import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const addInputBoxStyle = style({
  width: '100%',
  height: '5.2rem',
  backgroundColor: vars.colors.gray01,
  cursor: 'pointer',
});

export const scheduleItemContainerStyle = style({
  backgroundColor: vars.colors.gray01,
  borderRadius: '4px',
  padding: '1.4rem 2rem',
});

export const tagStyle = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '5.2rem',
  height: '2.8rem',
  backgroundColor: vars.colors.main04,
  borderRadius: '4px',
  color: vars.colors.white,
  ...vars.fonts.b10,
});
