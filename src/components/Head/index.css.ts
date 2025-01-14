import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/styles/theme.css';

export const headStyle = recipe({
  variants: {
    tag: {
      h1: vars.fonts.h1,
      h2: vars.fonts.h2,
      h3: vars.fonts.h3,
      h4: vars.fonts.h4,
      h5: vars.fonts.h5,
      h6: vars.fonts.h6,
      h7: vars.fonts.h7,
    },
  },
});
