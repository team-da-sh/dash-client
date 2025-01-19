import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const containerStyle = style({
  display: 'flex',
  flexDirection: 'column',

  width: '100%',
  padding: '8.4rem 2rem 15rem 2rem',
});

// 클래스명
export const nameLengthStyle = style({
  alignSelf: 'flex-end',
});

// 클래스 설명
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

// 장르

export const genreButtonContainerStyle = style({
  display: 'flex',
  gap: '1.2rem',
  flexWrap: 'wrap',
});

// 클래스 일정

export const addInputBoxStyle = style({
  width: '100%',
  height: '5.2rem',
  backgroundColor: vars.colors.gray01,
  cursor: 'pointer',
});

// 모집 인원

export const personnelContainerStyle = style({
  width: '100%',
  position: 'relative',
});

export const personnelTextStyle = style({
  position: 'absolute',
  right: '1.8rem',
  top: '50%',
  transform: 'translateY(-50%)',
});

// 클래스 장소
export const searchContainerStyle = style({
  height: '5.2rem',
  backgroundColor: vars.colors.gray01,
  borderRadius: '4px',
  padding: '1.4rem 1.8rem',
});

// 수강료
export const amountContainerStyle = style({
  width: '100%',
  position: 'relative',
});

export const amountTextStyle = style({
  position: 'absolute',
  right: '1.8rem',
  top: '50%',
  transform: 'translateY(-50%)',
});
