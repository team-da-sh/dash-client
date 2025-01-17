import Flex from '@/components/Flex';
import Head from '@/components/Head';
import { MY_RESERVATION_DATA } from '@/mocks/mockMyReservationData';
import { topImgStyle, gradientOverlay, textWrapper } from './index.css';

const TopImageComponent = () => {
  const { lessonName, teacherName } = MY_RESERVATION_DATA;

  return (
    <div className={topImgStyle}>
      <div className={gradientOverlay} />

      <Flex direction="column" gap="0.8rem" paddingTop="18.4rem" paddingLeft="2rem" className={textWrapper}>
        <Head level="h3" tag="h4" color="white">
          {lessonName}
        </Head>
        <Head level="h5" tag="h6" color="gray4">
          {teacherName}
        </Head>
      </Flex>
    </div>
  );
};

export default TopImageComponent;
