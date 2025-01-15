import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const searchBarContainerStyle = style({
  position: 'relative',

  display: 'flex',
  alignItems: 'center',
  gap: '1.6rem',

  width: '29.9rem',

  padding: '0.8rem 0',

  backgroundColor: vars.colors.gray01,

  borderRadius: '90px',
});

export const searchGrayStyle = style({
  position: 'absolute',

  top: 0,
  bottom: 0,
  left: 16,

  margin: 'auto 0',

  cursor: 'pointer',
});

export const xCircleGrayStyle = style({
  position: 'absolute',

  top: 0,
  bottom: 0,
  right: 12,

  margin: 'auto 0',

  cursor: 'pointer',
});
