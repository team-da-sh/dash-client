import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const TabListStyle = style({
  padding: '1.6rem 2rem 0 ',
});

export const TabPanelStyle = style({
  padding: '2.4rem 2rem',
  borderTop: '1px solid',
  borderColor: vars.colors.gray01,
});
