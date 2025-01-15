import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/styles/theme.css';

export const cardContainerStyle = style({
  width: '33.5rem',
  height: '19.4rem',

  padding: '1.6rem 2rem',
  borderRadius: 4,
  border: `1px solid ${vars.colors.gray03}`,

  backgroundColor: vars.colors.white,
});

export const cardStatusStyle = recipe({
  variants: {
    status: {
      completed: {
        color: vars.colors.gray03,
      },

      going: {
        color: vars.colors.black,
      },

      dDay: {
        color: vars.colors.main04,
      },
    },
  },
  defaultVariants: {
    status: 'going',
  },
});

export const cardImageStyle = style({
  width: '8.4rem',
  height: '8.4rem',

  borderRadius: 3.4,

  backgroundColor: vars.colors.gray04,
});
