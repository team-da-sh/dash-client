import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const layoutStyle = style({
  height: 'calc(100dvh - 6rem)',
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
  padding: '2.4rem 2rem',
  width: '100%',
});
