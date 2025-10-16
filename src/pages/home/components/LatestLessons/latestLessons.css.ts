import { style } from '@vanilla-extract/css';

export const containerStyle = style({
  width: '100%',

  marginTop: '3.2rem',
});

export const latestLessonWrapperStyle = style({
  display: 'flex',
  gap: '0.8rem',
  marginTop: '1.6rem',
  overflowX: 'auto',
  whiteSpace: 'nowrap',

  // foucs시 outline 영역이 안보이는것을 방지하기 위해 padding 추가 (접근성 준수)
  // 이 부분이 없으면 overflowX: auto 때문에 포커스시 outline 영역이 안보임
  padding: '0.4rem 0rem',

  selectors: {
    '&:first-of-type': {
      paddingLeft: '2rem',
    },
    '&:last-of-type': {
      paddingLeft: '2rem',
      paddingRight: '2rem',
    },
  },
});

export const titleStyle = style({
  paddingLeft: '2rem',
});
