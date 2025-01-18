import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

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
export const explanationSectionStyle = style([commonSectionStyle, {}]);
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
})

export const imageSectionStyle = style([commonSectionStyle, {}]);
export const genreSectionStyle = style([commonSectionStyle, {}]);

export const levelSectionStyle = style([commonSectionStyle, {}]);
export const recommendSectionStyle = style([commonSectionStyle, {}]);

export const scheduleSectionStyle = style([commonSectionStyle, {}]);
export const personnelSectionStyle = style([commonSectionStyle, {}]);

export const placeSectionStyle = style([commonSectionStyle, {}]);
export const amountSectionStyle = style([commonSectionStyle, {}]);
