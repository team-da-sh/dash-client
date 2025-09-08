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

export const bottomButtonStyle = style({
  position: 'fixed',
  bottom: '0',
  padding: '0 2rem 2.4rem',
  width: '100%',
  backgroundColor: vars.colors.gray01,
});
