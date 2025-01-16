import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Header from '@/components/Header';
import { vars } from '@/styles/theme.css';
import { RESERVATION_DATA } from '@/mocks/mockReservationData';

const TopImageComponent = () => {
  const { lessonName, teacherName } = RESERVATION_DATA;

  return (
    <>
        <Header.Root isColor={true}>
          <Header.BackIcon />
          <Header.Title title="클래스 신청" />
        </Header.Root>
        <div
          style={{
            width: '100%',
            height: '26.4rem',
            background: vars.colors.gray10,
          }}>
          <Flex direction="column" gap="0.8rem" paddingTop="18.4rem" paddingLeft="2rem">
            <Head level="h3" tag="h4" color="white">
              {lessonName}
            </Head>
            <Head level="h5" tag="h6" color="gray4">
              {teacherName}
            </Head>
          </Flex>
        </div>
    </>
  );
};

export default TopImageComponent;
