import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Text from '@/components/Text';
import { vars } from '@/styles/theme.css';
import { RESERVATION_DATA } from '@/mocks/mockReservationData';

const BookerComponent = () => {
  const { bookerName, bookerPhoneNumber } = RESERVATION_DATA;

  return (
    <div
      style={{
        background: vars.colors.white,
        borderRadius: '4px',
        padding: '2rem',
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        direction: 'revert',
        gap: '1rem',
        flexDirection: 'column',
      }}>
      <Flex gap="1.2rem" color={vars.colors.gray08}>
        <Text tag="b10" color="gray7" style={{ width: '4.4rem' }}>
          이름
        </Text>
        <Text tag="b7" color="gray10">
          {bookerName}
        </Text>
      </Flex>

      <Flex gap="1.2rem" color={vars.colors.gray08}>
        <Text tag="b10" color="gray7" style={{ width: '4.4rem' }}>
          전화번호
        </Text>
        <Text tag="b7" color="gray10">
          {bookerPhoneNumber}
        </Text>
      </Flex>
    </div>
  );
};

export default BookerComponent;
