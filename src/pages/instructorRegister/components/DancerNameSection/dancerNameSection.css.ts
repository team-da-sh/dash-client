import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const containerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
  width: '100%',
  paddingTop: '2.4rem',
});

export const duplicateCheckButtonStyle = style({
  width: '7.5rem',
  height: '3.6rem',
  ...vars.fonts.b2_m_long,
  color: vars.colors.gray09,
  flexShrink: 0,
});
