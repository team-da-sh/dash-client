import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/shared/styles/theme.css';

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
    color: {
      main1: { color: vars.colors.main01 },
      main2: { color: vars.colors.main02 },
      main3: { color: vars.colors.main03 },
      main4: { color: vars.colors.main04 },
      main5: { color: vars.colors.main05 },
      main6: { color: vars.colors.main06 },

      sub1: { color: vars.colors.sub01 },
      sub2: { color: vars.colors.sub02 },
      sub3: { color: vars.colors.sub03 },
      sub4: { color: vars.colors.sub04 },
      sub5: { color: vars.colors.sub05 },
      sub6: { color: vars.colors.sub06 },
      sub7: { color: vars.colors.sub07 },

      alert1: { color: vars.colors.alert01 },
      alert2: { color: vars.colors.alert02 },
      alert3: { color: vars.colors.alert03 },

      kakao1: { color: vars.colors.kakao01 },
      kakao2: { color: vars.colors.kakao02 },

      black70: { color: vars.colors.black70 },
      white50: { color: vars.colors.white50 },

      white: { color: vars.colors.white },
      gray1: { color: vars.colors.gray01 },
      gray2: { color: vars.colors.gray02 },
      gray3: { color: vars.colors.gray03 },
      gray4: { color: vars.colors.gray04 },
      gray5: { color: vars.colors.gray05 },
      gray6: { color: vars.colors.gray06 },
      gray7: { color: vars.colors.gray07 },
      gray8: { color: vars.colors.gray08 },
      gray9: { color: vars.colors.gray09 },
      gray10: { color: vars.colors.gray10 },
      gray11: { color: vars.colors.gray11 },
      black: { color: vars.colors.black },
    },
  },
});
