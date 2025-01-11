import { createGlobalTheme, fontFace } from '@vanilla-extract/css';

const pretendard = fontFace({
  src: "url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css')",
});

export const vars = createGlobalTheme(':root', {
  colors: {
    // main
    main01: '#C3B9FF',
    main02: '#9D8DFF',
    main03: '#8349FF',
    main04: '#7700FF',
    main05: '#5901E1',
    main06: '#4500CD',

    // sub
    sub01: '#DAFFB2',
    sub02: '#B8FF6C',
    sub03: '#A5FF46',
    sub04: '#84FF00',
    sub05: '#71E000',
    sub06: '#63DE07',
    sub07: '#45C00A',

    // alert
    alert01: '#FF6363',
    alert02: '#EE4545',
    alert03: '#D93030',

    // system
    kakao01: '#FDE500',
    kakao02: '#3C1E1E',

    // opacity
    black70: 'rgba(0, 0, 0, 0.7)',
    white50: 'rgba(255, 255, 255, 0.5)',

    // grayscale
    white: '#FFFFFF',
    gray01: '#F3F4F6',
    gray02: '#E5E7EB',
    gray03: '#A7AFBF',
    gray04: '#CFD3DE',
    gray05: '#A7AFBF',
    gray06: '#96A0B1',
    gray07: '#788397',
    gray08: '#636C7F',
    gray09: '#525A6A',
    gray10: '#363E4D',
    gray11: '#202734',
    black: '#091120',
  },

  fonts: {
    // head
    head01: {
      fontFamily: pretendard,
      fontWeight: '600',
      fontSize: '2.8rem',
      lineHeight: '4rem',
      letterSpacing: '-0.5%',
    },
    head02: {
      fontFamily: pretendard,
      fontWeight: '600',
      fontSize: '2.4rem',
      lineHeight: '3.6rem',
      letterSpacing: '-0.5%',
    },
    head03_med: {
      fontFamily: pretendard,
      fontWeight: '500',
      fontSize: '2rem',
      lineHeight: '2.8rem',
      letterSpacing: '-0.5%',
    },
    head03_semibold: {
      fontFamily: pretendard,
      fontWeight: '600',
      fontSize: '2rem',
      lineHeight: '2.4rem',
      letterSpacing: '-0.5%',
    },
    head04: {
      fontFamily: pretendard,
      fontWeight: '600',
      fontSize: '1.8rem',
      lineHeight: '2.6rem',
      letterSpacing: '-0.5%',
    },
    head05: {
      fontFamily: pretendard,
      fontWeight: '600',
      fontSize: '1.6rem',
      lineHeight: '1.8rem',
      letterSpacing: '-0.5%',
    },
    head05_long: {
      fontFamily: pretendard,
      fontWeight: '600',
      fontSize: '1.6rem',
      lineHeight: '2rem',
      letterSpacing: '-0.5%',
    },

    // body
    body01_reg: {
      fontFamily: pretendard,
      fontWeight: '400',
      fontSize: '1.4rem',
      lineHeight: '1.8rem',
      letterSpacing: '-0.5%',
    },
    body01_med: {
      fontFamily: pretendard,
      fontWeight: '500',
      fontSize: '1.4rem',
      lineHeight: '1.8rem',
      letterSpacing: '-0.5%',
    },
    body01_med_long: {
      fontFamily: pretendard,
      fontWeight: '500',
      fontSize: '1.4rem',
      lineHeight: '2rem',
      letterSpacing: '-0.5%',
    },
    body01_smbold: {
      fontFamily: pretendard,
      fontWeight: '600',
      fontSize: '1.4rem',
      lineHeight: '1.8rem',
      letterSpacing: '-0.5%',
    },
    body01_smbold_long: {
      fontFamily: pretendard,
      fontWeight: '600',
      fontSize: '1.4rem',
      lineHeight: '2.2rem',
      letterSpacing: '-0.5%',
    },
    body02_reg: {
      fontFamily: pretendard,
      fontWeight: '400',
      fontSize: '1.2rem',
      lineHeight: '1.6rem',
      letterSpacing: '-0.5%',
    },
    body02_med: {
      fontFamily: pretendard,
      fontWeight: '500',
      fontSize: '1.2rem',
      lineHeight: '1.6rem',
      letterSpacing: '-0.5%',
    },
    body02_med_narrow: {
      fontFamily: pretendard,
      fontWeight: '500',
      fontSize: '1.2rem',
      lineHeight: '1.6rem',
      letterSpacing: '-0.8%',
    },
    body02_smbold: {
      fontFamily: pretendard,
      fontWeight: '600',
      fontSize: '1.2rem',
      lineHeight: '1.6rem',
      letterSpacing: '-0.5%',
    },
    body02_smbold_narrow: {
      fontFamily: pretendard,
      fontWeight: '600',
      fontSize: '1.2rem',
      lineHeight: '1.6rem',
      letterSpacing: '-0.8%',
    },

    // caption
    caption01_reg: {
      fontFamily: pretendard,
      fontWeight: '400',
      fontSize: '1rem',
      lineHeight: '1.4rem',
      letterSpacing: '-0.5%',
    },
    caption01_reg_narr: {
      fontFamily: pretendard,
      fontWeight: '400',
      fontSize: '1rem',
      lineHeight: '1.4rem',
      letterSpacing: '-0.8%',
    },
    caption01_med: {
      fontFamily: pretendard,
      fontWeight: '500',
      fontSize: '1rem',
      lineHeight: '1.8rem',
      letterSpacing: '-0.5%',
    },
    caption01_smbold: {
      fontFamily: pretendard,
      fontWeight: '600',
      fontSize: '1rem',
      lineHeight: '1.4rem',
      letterSpacing: '-0.5%',
    },
  },
});
