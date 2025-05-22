import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const layoutStyle = style({
  position: 'absolute',
  left: '8.3rem',
  zIndex: vars.zIndex.four,

  display: 'flex',
  flexDirection: 'column',
  padding: '2rem',
  width: '27.2rem',
  minWidth: '16rem',
  gap: '0.8rem',

  backgroundColor: vars.colors.gray02,
  borderRadius: '12px',
});

export const arrowStyle = style({
  position: 'absolute',
  top: '-1rem',
  left: '2rem',
});

export const topStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const buttonStyle = style({
  height: '2.4rem',
});
