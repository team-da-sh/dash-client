import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const kakaoButtonStyle = style({
  width: '100%',
  padding: '1.6rem 9.5rem',

  backgroundColor: vars.colors.kakao01,
  borderRadius: '4px',

  cursor: 'pointer',
});

export const buttonStyle = style({
  whiteSpace: 'nowrap',
});
