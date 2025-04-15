import { createGlobalTheme } from '@vanilla-extract/css';

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
    gray03: '#DDDFE5',
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
    h1: {
      fontWeight: '600',
      fontSize: '2.8rem',
      lineHeight: '4rem',
      letterSpacing: '-0.14rem',
    },
    h2: {
      fontWeight: '600',
      fontSize: '2.4rem',
      lineHeight: '3.6rem',
      letterSpacing: '-0.12rem',
    },
    h3: {
      fontWeight: '600',
      fontSize: '2rem',
      lineHeight: '2.4rem',
      letterSpacing: '-0.1rem',
    },
    h4: {
      fontWeight: '500',
      fontSize: '2rem',
      lineHeight: '2.8rem',
      letterSpacing: '-0.1rem',
    },
    h5: {
      fontWeight: '600',
      fontSize: '1.8rem',
      lineHeight: '2.6rem',
      letterSpacing: '-0.09rem',
    },
    h6: {
      fontWeight: '600',
      fontSize: '1.6rem',
      lineHeight: '2.0rem',
      letterSpacing: '-0.08rem',
    },
    h7: {
      fontWeight: '600',
      fontSize: '1.6rem',
      lineHeight: '1.8rem',
      letterSpacing: '-0.08rem',
    },

    // body
    b1: {
      fontWeight: '600',
      fontSize: '1.4rem',
      lineHeight: '2.2rem',
      letterSpacing: '-0.7rem',
    },
    b2: {
      fontWeight: '600',
      fontSize: '1.4rem',
      lineHeight: '1.8rem',
      letterSpacing: '-0.07rem',
    },
    b3: {
      fontWeight: '500',
      fontSize: '1.4rem',
      lineHeight: '2rem',
      letterSpacing: '-0.07rem',
    },
    b4: {
      fontWeight: '500',
      fontSize: '1.4rem',
      lineHeight: '1.8rem',
      letterSpacing: '-0.07rem',
    },
    b5: {
      fontWeight: '400',
      fontSize: '1.4rem',
      lineHeight: '1.8rem',
      letterSpacing: '-0.1rem',
    },
    b6: {
      fontWeight: '600',
      fontSize: '1.2rem',
      lineHeight: '1.6rem',
      letterSpacing: '-0.096rem',
    },
    b7: {
      fontWeight: '600',
      fontSize: '1.2rem',
      lineHeight: '1.6rem',
      letterSpacing: '-0.06rem',
    },
    b8: {
      fontWeight: '500',
      fontSize: '1.2rem',
      lineHeight: '1.6rem',
      letterSpacing: '-0.096rem',
    },
    b9: {
      fontWeight: '500',
      fontSize: '1.2rem',
      lineHeight: '1.6rem',
      letterSpacing: '-0.06rem',
    },
    b10: {
      fontWeight: '400',
      fontSize: '1.2rem',
      lineHeight: '1.6rem',
      letterSpacing: '-0.06rem',
    },

    // caption
    c1: {
      fontWeight: '600',
      fontSize: '1rem',
      lineHeight: '1.4rem',
      letterSpacing: '-0.05rem',
    },
    c2: {
      fontWeight: '500',
      fontSize: '1rem',
      lineHeight: '1.8rem',
      letterSpacing: '-0.05rem',
    },
    c3: {
      fontWeight: '400',
      fontSize: '1rem',
      lineHeight: '1.4rem',
      letterSpacing: '-0.08rem',
    },
    c4: {
      fontWeight: '400',
      fontSize: '1rem',
      lineHeight: '1.4rem',
      letterSpacing: '-0.05rem',
    },
  },
  zIndex: {
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
  },
});
