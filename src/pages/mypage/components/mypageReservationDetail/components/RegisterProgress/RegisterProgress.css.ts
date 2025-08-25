import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/shared/styles/theme.css';

export const progressContatiner = style({
  display: 'flex',
  justifyContent: 'space-around',

  padding: '1.6rem 2.4rem 4rem 2.4rem',

  backgroundColor: vars.colors.white,
  borderRadius: '4px',
});

export const statusWrapper = style({
  position: 'relative',
  zIndex: vars.zIndex.two,

  height: '24px',
  width: '24px',
});

export const textStyle = style({
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',

  whiteSpace: 'nowrap',
});

export const dotsLineStyle = recipe({
  base: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    left: '100%',

    margin: 0,
    width: '300%',

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
