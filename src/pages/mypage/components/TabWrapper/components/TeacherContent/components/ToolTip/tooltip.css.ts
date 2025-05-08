import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const containerStyle = style({
  position: 'absolute',
  top: 0,
  right: 0,
  zIndex: vars.zIndex.four,
});

export const layoutStyle = style({
  position: 'absolute',
  right: 25,
  display: 'flex',
  flexDirection: 'column',
  padding: '2rem',
  width: '27.2rem',
  minWidth: '16rem',
  gap: '1rem',

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
});
