import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const tabPanelStyle = style({
  paddingTop: '2.4rem',
  paddingRight: '2rem',
  paddingLeft: '2rem',
  paddingBottom: '13.8rem',
  borderTop: '1px solid',

  borderColor: vars.colors.gray01,
});
