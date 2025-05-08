import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const tabPanelStyle = style({
  padding: '0.8rem 2rem 1.6rem 2rem',
});

export const tooltipStyle = style({
  color: vars.colors.white,
  zIndex: vars.zIndex.four,
});
