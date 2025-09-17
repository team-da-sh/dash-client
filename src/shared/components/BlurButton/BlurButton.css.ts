import { style, styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/shared/styles/theme.css';

export const fixedContainerStyle = recipe({
  base: {
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    zIndex: vars.zIndex.five,
    padding: '0 1.8rem 2.4rem',
  },
  variants: {
    blurBase: {
      gray: {
        background: `linear-gradient(
          to top,
          ${vars.colors.gray01} 0%,
          ${vars.colors.gray01} 80%,
          transparent 50%
        )`,
      },
      white: {
        background: `linear-gradient(
          to top,
          ${vars.colors.white} 0%,
          ${vars.colors.white} 80%,
          transparent 50%
        )`,
      },
    },
  },
  defaultVariants: { blurBase: 'gray' },
});

export const blurCapStyle = styleVariants({
  gray: {
    pointerEvents: 'none',
    height: '2rem',
    background: 'linear-gradient(to top, rgba(243,244,246,1), rgba(243,244,246,0))',
  },
  white: {
    pointerEvents: 'none',
    height: '2rem',
    background: 'linear-gradient(to top, rgba(255,255,255,1), rgba(255,255,255,0))',
  },
});

export const wrapperStyle = style({
    display: 'flex',
    gap: '0.8rem'
})