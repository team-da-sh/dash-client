import { containerStyle } from '@/pages/home/components/Footer/footer.css';
import IcLogoSmallBlack from '@/shared/assets/svg/IcLogoSmallBlack';
import Divider from '@/shared/components/Divider/Divider';
import Flex from '@/shared/components/Flex/Flex';
import Text from '@/shared/components/Text/Text';

const Footer = () => {
  return (
    <div className={containerStyle}>
      <IcLogoSmallBlack width={53.3} height={18} />

      <Flex gap="1.2rem" align="center" marginTop="1.4rem" marginBottom="1.2rem">
        <a href="https://pastoral-can-e04.notion.site/ed5a3a0e3cc74fce908030819a98dc89">
          <Text tag="b9" color="gray8">
            개인정보처리방침
          </Text>
        </a>

        <Divider direction="vertical" length={'0.6rem'} color="gray5" />
        <a href="https://pastoral-can-e04.notion.site/DASH-d53c54ca35424312a49a371ba39ee1a2">
          <Text tag="b9" color="gray8">
            이용약관
          </Text>
        </a>
      </Flex>

      <Flex gap="0.4rem" direction="column">
        <Flex gap="0.8rem" align="center">
          <Text tag="c1" color="gray5">
            대표
          </Text>
          <Divider direction="vertical" length={'0.6rem'} color="gray3" />
          <Text tag="c1" color="gray5">
            주은혜
          </Text>
        </Flex>
        <Flex gap="0.8rem" align="center">
          <Text tag="c1" color="gray5">
            이메일
          </Text>
          <Divider direction="vertical" length={'0.6rem'} color="gray3" />
          <Text tag="c1" color="gray5">
            doomchit1221@gmail.com
          </Text>
        </Flex>
        <Flex gap="0.8rem" align="center">
          <Text tag="c1" color="gray5">
            전화번호
          </Text>
          <Divider direction="vertical" length={'0.6rem'} color="gray3" />
          <Text tag="c1" color="gray5">
            010-5739-0233
          </Text>
        </Flex>
        <Text tag="c1" color="gray5">
          Copyright 2025. Dash All rights reserved.
        </Text>
      </Flex>
    </div>
  );
};

export default Footer;
