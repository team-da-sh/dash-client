import InfoComponent from '@/pages/reservation/InfoComponent';
import Flex from '@/components/Flex';
import Text from '@/components/Text';
import { vars } from '@/styles/theme.css';
import TopImageComponent from './TopImageComponent';

const Reservation = () => {
  return (
    <Flex direction="column" width="100%" style={{ backgroundColor: vars.colors.gray01 }}>
      <TopImageComponent />
      <Flex width="100%" direction="column" paddingTop="2.4rem" paddingLeft="2rem" paddingRight="2rem">
        <Text tag="b4" color="gray9">
          클래스 정보
        </Text>
        <InfoComponent />
        <Text tag="b4" color="gray9">
          신청자 정보
        </Text>
      </Flex>
    </Flex>
  );
};

export default Reservation;
