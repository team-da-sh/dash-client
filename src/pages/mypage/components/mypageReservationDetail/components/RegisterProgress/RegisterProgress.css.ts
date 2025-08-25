import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/shared/styles/theme.css';

export const progressContatiner = style({
  display: 'flex',
  justifyContent: 'space-around',

  padding: '1.6rem 2.4rem',

  backgroundColor: vars.colors.white,
  borderRadius: '4px',
});

export const statusWrapper = style({
  position: 'relative',
  zIndex: vars.zIndex.two,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.8rem',
});

export const dotsLineStyle = recipe({
  base: {
    position: 'absolute',
    top: '0.9rem',
    left: '2rem',
    zIndex: vars.zIndex.one,

    border: 'none',
    borderTop: '1px dashed',
    color: vars.colors.white,
    backgroundColor: vars.colors.white,

    width: '200%',
    height: '1px',
    stroke: vars.colors.gray02,
  },
  variants: {
    filled: {
      true: { borderColor: vars.colors.main03 },
      false: { borderColor: vars.colors.gray02 },
    },
  },
});
