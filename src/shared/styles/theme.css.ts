import { createGlobalTheme } from '@vanilla-extract/css';

export type FontKey =
  | 'h1_sb'
  | 'h3_sb'
  | 'h5_sb'
  | 'h5_m'
  | 'h6_sb'
  | 'b1_sb_long'
  | 'b1_sb'
  | 'b2_sb_long'
  | 'b2_sb'
  | 'b2_m_long'
  | 'b2_m'
  | 'b2_r'
  | 'b3_sb_narrow'
  | 'b3_sb'
  | 'b3_m_narrow'
  | 'b3_m'
  | 'b3_r'
  | 'c1_sb'
  | 'c1_m'
  | 'c1_r_narrow'
  | 'c1_r';

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
    black50: 'rgba(0, 0, 0, 0.5)',
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
    h1_sb: {
      fontWeight: '600',
      fontSize: '2.8rem',
      lineHeight: '4rem',
      letterSpacing: '-0.14rem',
    },
    h3_sb: {
      fontWeight: '600',
      fontSize: '2.4rem',
      lineHeight: '3.6rem',
      letterSpacing: '-0.12rem',
    },
    h5_sb: {
      fontWeight: '600',
      fontSize: '2rem',
      lineHeight: '2.4rem',
      letterSpacing: '-0.1rem',
    },
    h5_m: {
      fontWeight: '500',
      fontSize: '2rem',
      lineHeight: '2.8rem',
      letterSpacing: '-0.1rem',
    },
    h6_sb: {
      fontWeight: '600',
      fontSize: '1.8rem',
      lineHeight: '2.6rem',
      letterSpacing: '-0.09rem',
    },

    // body
    b1_sb_long: {
      fontWeight: '600',
      fontSize: '1.6rem',
      lineHeight: '2rem',
      letterSpacing: '-0.08rem',
    },
    b1_sb: {
      fontWeight: '600',
      fontSize: '1.6rem',
      lineHeight: '1.8rem',
      letterSpacing: '-0.08rem',
    },
    b2_sb_long: {
      fontWeight: '600',
      fontSize: '1.4rem',
      lineHeight: '2.2rem',
      letterSpacing: '-0.07rem',
    },
    b2_sb: {
      fontWeight: '600',
      fontSize: '1.4rem',
      lineHeight: '1.8rem',
      letterSpacing: '-0.07rem',
    },
    b2_m_long: {
      fontWeight: '500',
      fontSize: '1.4rem',
      lineHeight: '2rem',
      letterSpacing: '-0.07rem',
    },
    b2_m: {
      fontWeight: '500',
      fontSize: '1.4rem',
      lineHeight: '1.8rem',
      letterSpacing: '-0.07rem',
    },
    b2_r: {
      fontWeight: '400',
      fontSize: '1.4rem',
      lineHeight: '1.8rem',
      letterSpacing: '-0.1rem',
    },
    b3_sb_narrow: {
      fontWeight: '600',
      fontSize: '1.2rem',
      lineHeight: '1.6rem',
      letterSpacing: '-0.096rem',
    },
    b3_sb: {
      fontWeight: '600',
      fontSize: '1.2rem',
      lineHeight: '1.6rem',
      letterSpacing: '-0.06rem',
    },
    b3_m_narrow: {
      fontWeight: '500',
      fontSize: '1.2rem',
      lineHeight: '1.6rem',
      letterSpacing: '-0.096rem',
    },
    b3_m: {
      fontWeight: '500',
      fontSize: '1.2rem',
      lineHeight: '1.6rem',
      letterSpacing: '-0.06rem',
    },
    b3_r: {
      fontWeight: '400',
      fontSize: '1.2rem',
      lineHeight: '1.6rem',
      letterSpacing: '-0.06rem',
    },

    // caption
    c1_sb: {
      fontWeight: '600',
      fontSize: '1rem',
      lineHeight: '1.4rem',
      letterSpacing: '-0.05rem',
    },
    c1_m: {
      fontWeight: '500',
      fontSize: '1rem',
      lineHeight: '1.8rem',
      letterSpacing: '-0.05rem',
    },
    c1_r_narrow: {
      fontWeight: '400',
      fontSize: '1rem',
      lineHeight: '1.4rem',
      letterSpacing: '-0.08rem',
    },
    c1_r: {
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
    backdrop: '9',
    modal: '10',
  },
  tags: {
    h1_sb: 'h1_sb',
    h3_sb: 'h3_sb',
    h5_sb: 'h5_sb',
    h5_m: 'h5_m',
    h6_sb: 'h6_sb',
    b1_sb_long: 'b1_sb_long',
    b1_sb: 'b1_sb',
    b2_sb_long: 'b2_sb_long',
    b2_sb: 'b2_sb',
    b2_m_long: 'b2_m_long',
    b2_m: 'b2_m',
    b2_r: 'b2_r',
    b3_sb_narrow: 'b3_sb_narrow',
    b3_sb: 'b3_sb',
    b3_m_narrow: 'b3_m_narrow',
    b3_m: 'b3_m',
    b3_r: 'b3_r',
    c1_sb: 'c1_sb',
    c1_m: 'c1_m',
    c1_r_narrow: 'c1_r_narrow',
    c1_r: 'c1_r',
  },
});
