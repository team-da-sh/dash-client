import { style, globalStyle } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  alignItems: 'center',
  overflow: 'auto',
});

export const w100 = style({
  width: '100%',
});

export const buttonCustomStyle = style({
  width: '100%',
  padding: '0 3rem',
});

export const h100 = style({
  height: '100%',
});

export const maxW540 = style({
  maxWidth: '54rem',
});

export const btnWrapper = style({
  padding: '0 2.4rem',
});

export const btn = style({
  padding: '1.1rem 2.2rem',
  border: 'none',
  borderRadius: '8px',
  backgroundColor: '#f2f4f6',
  color: '#4e5968',
  fontWeight: 600,
  fontSize: '17px',
  cursor: 'pointer',
});

export const btnPrimary = style({
  backgroundColor: '#3282f6',
  color: '#f9fcff',
});

export const textCenter = style({
  textAlign: 'center',
});

export const flex = style({
  display: 'flex',
});

export const flexColumn = style({
  display: 'flex',
  flexDirection: 'column',
});

export const justifyCenter = style({
  justifyContent: 'center',
});

export const justifyBetween = style({
  justifyContent: 'space-between',
});

export const alignCenter = style({
  alignItems: 'center',
});

export const confirmLoading = style({
  marginTop: '7.2rem',
  height: '40rem',
  justifyContent: 'space-between',
});

export const flexCustomStyle = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100vh',
});

export const confirmSuccess = style({
  display: 'none',
  marginTop: '7.2rem',
});

export const buttonGroup = style({
  marginTop: '3.2rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '1.6rem',
});

export const title = style({
  marginTop: '3.2rem',
  marginBottom: '0',
  color: '#191f28',
  fontWeight: 'bold',
  fontSize: '2.4rem',
});

export const description = style({
  marginTop: '0.8rem',
  color: '#4e5968',
  fontSize: '1.7rem',
  fontWeight: 500,
});

export const responseSection = style({
  marginTop: '60px',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  fontSize: '2rem',
});

export const responseLabel = style({
  fontWeight: 600,
  color: '#333d48',
  fontSize: '1.7rem',
});

export const responseText = style({
  fontWeight: 500,
  color: '#4e5968',
  fontSize: '1.7rem',
  paddingLeft: '1.6rem',
  wordBreak: 'break-word',
  textAlign: 'right',
});

export const colorGrey = style({
  color: '#b0b8c1',
});

globalStyle('a', {
  textDecoration: 'none',
  textAlign: 'center',
});
