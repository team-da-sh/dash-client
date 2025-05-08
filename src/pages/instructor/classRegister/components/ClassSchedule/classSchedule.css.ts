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

export const scheduleItemContainerStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  width: '100%',

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
  ...vars.fonts.b3_sb_narrow,
});
