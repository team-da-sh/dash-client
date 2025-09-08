import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/shared/styles/theme.css';

export const progressContatiner = style({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',

  padding: '1.6rem 2.4rem 4rem 2.4rem',

  backgroundColor: vars.colors.white,
  borderRadius: '4px',
});

export const statusWrapper = style({
  position: 'relative',

  height: '24px',
  width: '24px',
});

export const svgStyle = style({
  zIndex: vars.zIndex.three,
});

export const textStyle = style({
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',

  whiteSpace: 'nowrap',
});

export const cancelLineStyle = recipe({
  base: {
    width: '100%',

    border: 'none',
    borderTop: '1px dashed',
    color: vars.colors.white,
    backgroundColor: vars.colors.white,

    stroke: vars.colors.gray02,
  },
  variants: {
    filled: {
      true: { borderColor: vars.colors.alert01 },
      false: { borderColor: vars.colors.gray02 },
    },
  },
});

export const dotsLineStyle = recipe({
  base: {
    width: '100%',

    border: 'none',
    borderTop: '1px dashed',
    color: vars.colors.white,
    backgroundColor: vars.colors.white,

    stroke: vars.colors.gray02,
  },
  variants: {
    filled: {
      true: { borderColor: vars.colors.main03 },
      false: { borderColor: vars.colors.gray02 },
    },
  },
});
