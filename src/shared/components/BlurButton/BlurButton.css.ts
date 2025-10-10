import { style, styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/shared/styles/theme.css';

export const fixedContainerStyle = recipe({
  base: {
    position: 'fixed',
    left: 0,
    right: 0,
    margin: '0 auto',
    width: 'min(100dvw, var(--max-width))',
    bottom: 0,
    zIndex: vars.zIndex.one,
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
  padding: '0 2.4rem 2rem',
});
