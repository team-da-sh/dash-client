import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const onboardingHeaderStyle = style({
  position: 'sticky',
  top: 0,

  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '6rem',
  padding: '1.8rem 2rem',
  gap: '0.8rem',

  background: vars.colors.white,
  borderBottom: `1px solid ${vars.colors.gray03}`,
});

export const svgStyle = style({
  display: 'block',
});
