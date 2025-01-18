import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const dropdownRoot = style({
  position: 'relative',
});

export const dropdownTrigger = style({
  position: 'relative',
});

export const dropdownContent = style({
  position: 'absolute',
  zIndex: 2,
  right: 0,
  top: 25,
  borderRadius: '8px',
  boxShadow: '0px 0px 12px 0px rgba(0, 0, 0, 0.10)',
  gap: '0.4rem',
  backgroundColor: vars.colors.white,
});

export const dropdownItem = style({
  display: 'flex',
  backgroundColor: vars.colors.white,
  borderRadius: '8px',
  width: '11.2rem',
  height: '3.2rem',
  padding: '0.4rem 1.6rem',
});

export const dropdownItemText = style({
  ...vars.fonts.b6,
  padding: '0.4rem 1rem',
  color: vars.colors.gray09,
});
