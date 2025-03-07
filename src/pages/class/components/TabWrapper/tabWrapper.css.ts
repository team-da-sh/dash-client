import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const tabPanelStyle = style({
  padding: '2.4rem 2rem',
  borderTop: '1px solid',

  borderColor: vars.colors.gray01,
});
