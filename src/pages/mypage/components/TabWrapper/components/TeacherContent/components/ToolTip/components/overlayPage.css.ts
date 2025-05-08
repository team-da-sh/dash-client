import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const overlayStyle = style({
  position: 'fixed',
  top: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: vars.colors.black70,
  zIndex: vars.zIndex.three,
});
