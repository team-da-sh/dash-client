import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const tabPanelStyle = style({
  paddingTop: '3.6rem',
  paddingRight: '2rem',
  paddingLeft: '2rem',
  paddingBottom: '4.8rem',
  borderTop: '1px solid',

  borderColor: vars.colors.gray01,
});
