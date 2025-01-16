import InfoComponent from '@/pages/reservation/InfoComponent';
import Flex from '@/components/Flex';
import Text from '@/components/Text';
import { vars } from '@/styles/theme.css';
import TopImageComponent from './TopImageComponent';
import BookerComponent from "./BookerComponent";
import Divider from "@/components/Divider";

const Reservation = () => {
  return (
    <Flex direction="column" width="100%" style={{ backgroundColor: vars.colors.gray01 }}>
      <TopImageComponent />
      <Flex width="100%" direction="column" paddingTop="2.4rem" paddingLeft="2rem" paddingRight="2rem" paddingBottom="3.6rem" gap="3.2rem">
        <Flex direction="column" width="100%" gap="1.6rem">
          <Text tag="b4" color="gray9">
            클래스 정보
          </Text>
          <InfoComponent />
        </Flex>
        <Flex direction="column" width="100%" gap="1.6rem">
          <Text tag="b4" color="gray9">
            신청자 정보
          </Text>
          <BookerComponent />
        </Flex>
      </Flex>
      <Divider direction='horizontal' length='100%' thickness='1.1rem'/>
    </Flex>
  );
};

export default Reservation;
