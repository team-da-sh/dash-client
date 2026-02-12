import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/shared/styles/theme.css';

export const reservationHeaderStyle = recipe({
  base: {
    position: 'sticky',
    top: 0,
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '6rem',
    padding: '1.8rem 2rem',
    gap: '0.8rem',
    background: vars.colors.white,
    zIndex: vars.zIndex.two,
  },
  variants: {
    withBorder: {
      true: { borderBottom: `1px solid ${vars.colors.gray03}` },
      false: { borderBottom: 'none' },
    },
  },
});

export const svgStyle = style({
  display: 'block',
});
