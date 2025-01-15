import { style, globalStyle } from '@vanilla-extract/css';
import { vars } from "@/styles/theme.css";

export const cardContent = style({
  display: 'flex',
  alignItems: 'center',
});

export const roundBox = style({
  width: '5.2rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: vars.colors.main04,
  color: vars.colors.white,
  border: `1px solid ${vars.colors.main04}`,
  borderRadius: '4px',
  marginRight: '1rem',
  fontWeight: 'bold',
  padding: '0.6rem 1.2rem',
});

// 세부 정보 텍스트 스타일 (부모 클래스)
export const details = style({
  lineHeight: '1.5',
});

// 자식 요소 전역 스타일링
globalStyle(`${details} p:first-child`, {
  color: vars.colors.black,
  fontWeight: 600,
});

globalStyle(`${details} p:last-child`, {
  color: vars.colors.gray07,
});
