import { style } from '@vanilla-extract/css';
export const levelContent = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
});

export const headerRow = style({
  display: 'flex',
  justifyContent: 'space-between', // 좌우로 요소 배치
  alignItems: 'center', // 세로 정렬
  marginBottom: '1rem', // 간격 추가
});