import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const layoutStyle = style({
  minHeight: 'calc(100dvh - 6rem)',
  backgroundColor: vars.colors.gray01,
});

export const containerStyle = style({
  padding: '2rem 2rem 3.4rem 2rem',
});

export const titleStyle = style({
  marginBottom: '1.2rem',
});
