import {
  containerStyle,
  textStyle,
  linkWrapperStyle,
  infoWrapperStyle,
  infoRowStyle,
} from '@/pages/home/components/Footer/footer.css';
import IcHeaderLogoSmallBlack from '@/shared/assets/svg/IcHeaderLogoSmallBlack';
import Divider from '@/shared/components/Divider/Divider';
import Text from '@/shared/components/Text/Text';

const Footer = () => {
  return (
    <div className={containerStyle}>
      <IcHeaderLogoSmallBlack width={53.3} height={18} />

      <div className={linkWrapperStyle}>
        <a href="https://pastoral-can-e04.notion.site/ed5a3a0e3cc74fce908030819a98dc89" target="_blank">
          <Text as="span" tag="b3_sb" color="gray8">
            개인정보처리방침
          </Text>
        </a>

        <Divider direction="vertical" length={'0.6rem'} color="gray5" />
        <a href="https://pastoral-can-e04.notion.site/DASH-d53c54ca35424312a49a371ba39ee1a2" target="_blank">
          <Text as="span" tag="b3_sb" color="gray8">
            이용약관
          </Text>
        </a>
      </div>

      <div className={infoWrapperStyle}>
        <div className={infoRowStyle}>
          <Text tag="c1_r" color="gray5">
            대표
          </Text>
          <Divider direction="vertical" length={'0.6rem'} color="gray3" />
          <Text tag="c1_r" color="gray5">
            주은혜
          </Text>
        </div>
        <div className={infoRowStyle}>
          <Text tag="c1_r" color="gray5">
            이메일
          </Text>
          <Divider direction="vertical" length={'0.6rem'} color="gray3" />
          <Text tag="c1_r" color="gray5" className={textStyle}>
            doomchit1221@gmail.com
          </Text>
        </div>
        <div className={infoRowStyle}>
          <Text tag="c1_r" color="gray5">
            전화번호
          </Text>
          <Divider direction="vertical" length={'0.6rem'} color="gray3" />
          <Text tag="c1_r" color="gray5" className={textStyle}>
            010-5739-0233
          </Text>
        </div>
        <Text tag="c1_r" color="gray5">
          Copyright 2025. Dash All rights reserved.
        </Text>
      </div>
    </div>
  );
};

export default Footer;
