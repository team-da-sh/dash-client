import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const containerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
  width: '100%',
  padding: '2.4rem 0',
});

export const duplicateCheckButtonStyle = style({
  width: '7.5rem',
  padding: '0.8rem 1.4rem',
  ...vars.fonts.b2_m_long,
  flexShrink: 0,
  marginRight: '-0.6rem',
  whiteSpace: 'nowrap',
});
