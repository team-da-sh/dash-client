import { vars } from '@/styles/theme.css';
import { RESERVATION_DATA } from '@/mocks/mockReservationData';
import Head from "@/components/Head";
import Text from "@/components/Text";

const InfoComponent = () => {
  const { lessonName, lessonLocation, lessonLevel, bookerName } = RESERVATION_DATA; // 첫 번째 데이터 접근

  return (
    <div
      style={{
        background: vars.colors.white,
        borderRadius: '4px',
        padding: '2rem',
        width: '100%',
        margin: '0 auto',
      }}>
      <Head level="h5" tag="h6">
        {lessonName}
      </Head>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          color: vars.colors.gray08,
        }}>
        <Text tag="b10" color="gray7">강사</Text>
        <Text tag="b7" color="gray10">{bookerName}</Text>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          color: vars.colors.gray08,
        }}>
        <Text tag="b10" color="gray7">일정</Text>
        <Text tag="b7" color="gray10">{bookerName}</Text>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          color: vars.colors.gray08,
        }}>
        <Text tag="b10" color="gray7">장소</Text>
        <Text tag="b7" color="gray10">{lessonLocation}</Text>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          color: vars.colors.gray08,
        }}>
        <Text tag="b10" color="gray7">난이도</Text>
        <Text tag="b7" color="gray10">{lessonLevel}</Text>
      </div>
    </div>
  );
};

export default InfoComponent;
