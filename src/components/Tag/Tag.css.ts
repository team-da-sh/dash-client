import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

// 공통 스타일 정의
export const tagBase = style({
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: vars.colors.white,
});

// 유형별 스타일 (색상)
export const tagTypeStyles = styleVariants({
  genre: {
    backgroundColor: vars.colors.main03,
  },
  level: {
    backgroundColor: vars.colors.sub07,
  },
  deadline: {
    backgroundColor: vars.colors.gray10,
  },
});

// 크기별 스타일 (padding, border-radius, 글자)
export const tagSizeStyles = styleVariants({
  small: {
    borderRadius: '2px',
    padding: '0.4rem 0.6rem',
    height: '1.8rem',
    gap: '1rem',
    ...vars.fonts.caption01_med,
  },

  medium: {
    borderRadius: '2.4px',
    padding: '0.3rem 0.8rem',
    gap: '1.2rem',
    ...vars.fonts.body02_med,
  },

  thumbnail: {
    borderRadius: '0px 4px 4px 0px',
    padding: '0.2rem 0.8rem',
    gap: '1rem',
  },
});
