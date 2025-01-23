import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/styles/theme.css';

export const dividerStyle = recipe({
  base: {
    display: 'block',
  },
  variants: {
    direction: {
      horizontal: {
        width: '100%',
        height: '0.1rem',
      },
      vertical: {
        width: '0.1rem',
        height: '100%',
      },
    },
    color: {
      main1: { backgroundColor: vars.colors.main01 },
      main2: { backgroundColor: vars.colors.main02 },
      main3: { backgroundColor: vars.colors.main03 },
      main4: { backgroundColor: vars.colors.main04 },
      main5: { backgroundColor: vars.colors.main05 },
      main6: { backgroundColor: vars.colors.main06 },

      sub1: { backgroundColor: vars.colors.sub01 },
      sub2: { backgroundColor: vars.colors.sub02 },
      sub3: { backgroundColor: vars.colors.sub03 },
      sub4: { backgroundColor: vars.colors.sub04 },
      sub5: { backgroundColor: vars.colors.sub05 },
      sub6: { backgroundColor: vars.colors.sub06 },
      sub7: { backgroundColor: vars.colors.sub07 },

      alert1: { backgroundColor: vars.colors.alert01 },
      alert2: { backgroundColor: vars.colors.alert02 },
      alert3: { backgroundColor: vars.colors.alert03 },

      kakao1: { backgroundColor: vars.colors.kakao01 },
      kakao2: { backgroundColor: vars.colors.kakao02 },

      black70: { backgroundColor: vars.colors.black70 },
      white50: { backgroundColor: vars.colors.white50 },

      white: { backgroundColor: vars.colors.white },
      gray1: { backgroundColor: vars.colors.gray01 },
      gray2: { backgroundColor: vars.colors.gray02 },
      gray3: { backgroundColor: vars.colors.gray03 },
      gray4: { backgroundColor: vars.colors.gray04 },
      gray5: { backgroundColor: vars.colors.gray05 },
      gray6: { backgroundColor: vars.colors.gray06 },
      gray7: { backgroundColor: vars.colors.gray07 },
      gray8: { backgroundColor: vars.colors.gray08 },
      gray9: { backgroundColor: vars.colors.gray09 },
      gray10: { backgroundColor: vars.colors.gray10 },
      gray11: { backgroundColor: vars.colors.gray11 },
      black: { backgroundColor: vars.colors.black },
    },
  },
  defaultVariants: {
    direction: 'horizontal',
    color: 'gray4',
  },
});
