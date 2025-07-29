import { vars } from '@/shared/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const layout = style({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '2rem',
})

export const colorBox = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2rem',
});

export const color = style({
  width: '10rem',
  height: '10rem',
});

export const name = style({
    ...vars.fonts.b1_sb_long,
    color: vars.colors.gray08,
})

export const meta = style({
  ...vars.fonts.b3_m_narrow,
  color: vars.colors.gray10
})

export const colorGroup = style({
  marginBottom: '2rem',
});

export const groupTitle = style({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginBottom: '1rem',
});