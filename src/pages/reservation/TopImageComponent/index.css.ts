import { vars } from "@/styles/theme.css";
import { style } from '@vanilla-extract/css';

export const topImgStyle = style({
  position: 'relative',
  width: '100%',
  height: '26.4rem',
  background: vars.colors.gray10,
  overflow: 'hidden',
  zIndex: 0,
});

export const gradientOverlay = style({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  height: '16rem',
  background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%)',
  zIndex: 1,
  pointerEvents: 'none', 
});

export const textWrapper = style({
  position: 'relative', 
  zIndex: 2, 
});
