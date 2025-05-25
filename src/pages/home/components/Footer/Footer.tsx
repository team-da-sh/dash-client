import { containerStyle } from '@/pages/home/components/Footer/footer.css';
import IcHeaderLogoSmallBlack from '@/shared/assets/svg/IcHeaderLogoSmallBlack';
import Divider from '@/shared/components/Divider/Divider';
import Text from '@/shared/components/Text/Text';
import { sprinkles } from '@/shared/styles/sprinkles.css';

const Footer = () => {
  return (
    <div className={containerStyle}>
      <IcHeaderLogoSmallBlack width={53.3} height={18} />

      <div className={sprinkles({ display: 'flex', gap: 12, alignItems: 'center', marginTop: 14, marginBottom: 12 })}>
        <a href="https://pastoral-can-e04.notion.site/ed5a3a0e3cc74fce908030819a98dc89">
          <Text tag="b3_sb" color="gray8">
            개인정보처리방침
          </Text>
        </a>

        <Divider direction="vertical" length={'0.6rem'} color="gray5" />
        <a href="https://pastoral-can-e04.notion.site/DASH-d53c54ca35424312a49a371ba39ee1a2">
          <Text tag="b3_sb" color="gray8">
            이용약관
          </Text>
        </a>
      </div>

      <div className={sprinkles({ display: 'flex', gap: 4, flexDirection: 'column' })}>
        <div className={sprinkles({ display: 'flex', gap: 8, alignItems: 'center' })}>
          <Text tag="c1_r" color="gray5">
            대표
          </Text>
          <Divider direction="vertical" length={'0.6rem'} color="gray3" />
          <Text tag="c1_r" color="gray5">
            주은혜
          </Text>
        </div>
        <div className={sprinkles({ display: 'flex', gap: 8, alignItems: 'center' })}>
          <Text tag="c1_r" color="gray5">
            이메일
          </Text>
          <Divider direction="vertical" length={'0.6rem'} color="gray3" />
          <Text tag="c1_r" color="gray5">
            doomchit1221@gmail.com
          </Text>
        </div>
        <div className={sprinkles({ display: 'flex', gap: 8, alignItems: 'center' })}>
          <Text tag="c1_r" color="gray5">
            전화번호
          </Text>
          <Divider direction="vertical" length={'0.6rem'} color="gray3" />
          <Text tag="c1_r" color="gray5">
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
