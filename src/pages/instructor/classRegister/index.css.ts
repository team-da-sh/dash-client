import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const containerStyle = style({
  display: 'flex',
  flexDirection: 'column',

  width: '100%',
  padding: '8.4rem 2rem 15rem 2rem', //아래 이거 맞을까~!~?
});

const commonSectionStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
});

// 클래스명명
export const nameSectionStyle = style([
  commonSectionStyle,
  {
    marginBottom: '2rem',
  },
]);
export const nameLengthStyle = style({
  alignSelf: 'flex-end',
});

// 클래스 설명
export const explanationSectionStyle = style([
  commonSectionStyle,
  {
    marginBottom: '4rem',
  },
]);
export const textareaStyle = style({
  width: '100%',
  padding: '1.6rem 1.8rem',
  height: '9.8rem',
  overflow: 'hidden',
  resize: 'none',
  borderRadius: '4px',
  backgroundColor: vars.colors.gray01,
  ...vars.fonts.b5,

  '::placeholder': {
    color: vars.colors.gray05,
  },

  ':focus': {
    outline: `1px solid ${vars.colors.main04}`,
  },
});

// 이미지 업로드
export const imageSectionStyle = style([
  commonSectionStyle,
  {
    marginBottom: '4rem',
  },
]);

// 장르
export const genreSectionStyle = style([
  commonSectionStyle,
  {
    marginBottom: '4rem',
  },
]);

export const genreButtonContainerStyle = style({
  display: 'flex',
  gap: '1.2rem',
  flexWrap: 'wrap',
});

// 난이도
export const levelSectionStyle = style([
  commonSectionStyle,
  {
    marginBottom: '4rem',
  },
]);

// 클래스 추천 대상
export const recommendSectionStyle = style([
  commonSectionStyle,
  {
    marginBottom: '3rem',
  },
]);

// 클래스 일정
export const scheduleSectionStyle = style([
  commonSectionStyle,
  {
    marginBottom: '5rem',
  },
]);

export const addInputBoxStyle = style({
  width: '100%',
  height: '5.2rem',
  backgroundColor: vars.colors.gray01,
  cursor: 'pointer',
});

// 모집 인원
export const personnelSectionStyle = style([commonSectionStyle, {}]);

export const personnelContainerStyle = style({
  position: 'relative',
});



export const personnelTextStyle = style({
  position: 'absolute',
  right: '1.8rem',
  top: '50%',
  transform: 'translateY(-50%)',
});

export const placeSectionStyle = style([commonSectionStyle, {}]);
export const amountSectionStyle = style([commonSectionStyle, {}]);
