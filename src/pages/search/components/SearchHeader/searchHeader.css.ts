import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/shared/styles/theme.css';

export const headerRootStyle = recipe({
  base: {
    position: 'fixed',
    display: 'flex',
    gap: '1.2rem',
    alignItems: 'center',
    width: '100%',
    height: '6rem',
    padding: '0.8rem 2rem',
    transition: 'background-color 0.3s ease',
    zIndex: vars.zIndex.two,
  },
  variants: {
    isColor: {
      true: { backgroundColor: vars.colors.white },
      false: { backgroundColor: 'transparent' },
    },
  },
  defaultVariants: {
    isColor: false,
  },
});

export const backIconStyle = style({
  gridColumn: '1',
  justifySelf: 'start',
});
