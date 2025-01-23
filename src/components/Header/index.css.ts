import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/styles/theme.css';

export const headerRootStyle = recipe({
  base: {
    position: 'fixed',
    display: 'grid',
    gridTemplateColumns: '1fr auto 1fr',
    alignItems: 'center',
    width: '100%',
    height: '6rem',
    padding: '1.8rem 2rem',
    transition: 'background-color 0.3s ease',
    zIndex: 2,
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

export const titleStyle = style({
  gridColumn: '2',
  justifySelf: 'center',
  textAlign: 'center',
});

export const closeIconStyle = style({
  gridColumn: '3',
  justifySelf: 'end',
});
