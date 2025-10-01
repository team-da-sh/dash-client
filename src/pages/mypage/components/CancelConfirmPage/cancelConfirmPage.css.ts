import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const layoutStyle = style({
  height: '100dvh',
  backgroundColor: vars.colors.gray01,
});

export const containerStyle = style({
  height: '100%',
});

export const dividerStyle = style({
  width: '100vw',

  border: 'none',
  borderTop: `11px solid ${vars.colors.gray02}`,

  transform: 'translate(-20px, -3px)',
});
