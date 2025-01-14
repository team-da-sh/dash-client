import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/styles/theme.css';

export const textStyle = recipe({
  variants: {
    tag: {
      b1: vars.fonts.b1,
      b2: vars.fonts.b2,
      b3: vars.fonts.b3,
      b4: vars.fonts.b4,
      b5: vars.fonts.b5,
      b6: vars.fonts.b6,
      b7: vars.fonts.b7,
      b8: vars.fonts.b8,
      b9: vars.fonts.b9,
      b10: vars.fonts.b10,
      c1: vars.fonts.c1,
      c2: vars.fonts.c2,
      c3: vars.fonts.c3,
      c4: vars.fonts.c4,
    },
  },
});
