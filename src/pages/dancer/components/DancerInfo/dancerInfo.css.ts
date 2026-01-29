import { style } from '@vanilla-extract/css';
import { hideScrollbar } from '@/shared/styles/utils.css';

export const rowScrollStyle = style([
  hideScrollbar,
  {
    display: 'flex',
    flexDirection: 'row',

    width: '100%',
    gap: '0.8rem',
    paddingBottom: '3.6rem',

    overflowX: 'auto',
  },
]);

export const classItemStyle = style({
  flex: '0 0 auto',
});

export const firstClassItemStyle = style({
  paddingLeft: '2rem',
});

export const lastClassItemStyle = style({
  paddingRight: '2rem',
});

export const detailStyle = style({
  whiteSpace: 'pre-line',
  wordBreak: 'break-word',
});

export const linkStyle = style({
  display: 'inline-block',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  maxWidth: '14ch',
});

export const infoSectionStyle = style({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '2rem',
  paddingRight: '2rem',
  paddingLeft: '2rem',
  paddingBottom: '3.2rem',
  gap: '2rem',
});

export const socialLinksStyle = style({
  display: 'flex',
  gap: '2.8rem',
});

export const socialLinkStyle = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '0.9rem',
});

export const classSectionStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
});

export const classTitleStyle = style({
  paddingLeft: '2rem',
});

export const emptyClassMessageStyle = style({
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '5.2rem',
  paddingBottom: '7.2rem',
});
