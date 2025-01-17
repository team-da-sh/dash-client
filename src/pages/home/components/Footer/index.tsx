import { containerStyle } from '@/pages/home/components/Footer/index.css';
import Divider from '@/components/Divider';
import Flex from '@/components/Flex';
import Text from '@/components/Text';
import { IcLogoSmallBlack } from '@/assets/svg';

const Footer = () => {
  return (
    <div className={containerStyle}>
      <IcLogoSmallBlack width={53.3} height={18} />

      <Flex gap="1.2rem" align="center" marginTop="1.4rem" marginBottom="1.2rem">
        <Text tag="b9" color="gray8">
          개인정보처리방침
        </Text>
        <Divider direction="vertical" length={'0.6rem'} color="gray5" />
        <Text tag="b9" color="gray8">
          이용약관
        </Text>
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
            010-4080-8364
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
