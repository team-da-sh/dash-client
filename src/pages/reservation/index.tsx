import InfoComponent from '@/pages/reservation/InfoComponent';
import Divider from '@/components/Divider';
import Flex from '@/components/Flex';
import Header from '@/components/Header';
import Text from '@/components/Text';
import BookerComponent from './BookerComponent';
import TopImageComponent from './TopImageComponent';
import { headerStyle, reservationStyle } from './index.css';

const Reservation = () => {
  return (
    <Flex direction="column" width="100%" className={reservationStyle}>
      <div className={headerStyle}>
        <Header.Root isColor={true}>
          <Header.BackIcon />
          <Header.Title title="클래스 신청" />
        </Header.Root>
      </div>
      <TopImageComponent />
      <Flex
        width="100%"
        direction="column"
        paddingTop="2.4rem"
        paddingLeft="2rem"
        paddingRight="2rem"
        paddingBottom="3.6rem"
        gap="3.2rem">
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
      <Divider direction="horizontal" length="100%" thickness="1.1rem" />
    </Flex>
  );
};

export default Reservation;
