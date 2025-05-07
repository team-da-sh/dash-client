import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const onboardingHeaderStyle = style({
  position: 'sticky',
  top: 0,

  width: '100%',
  height: '6rem',
  padding: '2rem',
  background: vars.colors.white,
  borderBottom: `1px solid ${vars.colors.gray03}`,
});
