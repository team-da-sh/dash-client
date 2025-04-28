import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const headerStyle = style({
  position: 'sticky',
  top: 0,
  zIndex: vars.zIndex.two,

  display: 'flex',
  width: '100%',
  height: '6rem',
  justifyContent: 'space-between',
  padding: '2rem',
  background: vars.colors.white,
});
