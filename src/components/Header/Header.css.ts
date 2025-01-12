import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

export const headerRoot = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '6rem',
  padding: '1.8rem 2rem',
});

export const titleStyle = style({
  ...vars.fonts.head04,
});
