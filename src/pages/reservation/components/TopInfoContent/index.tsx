import { topImgStyle, gradientOverlayStyle, textWrapperStyle } from '@/pages/reservation/components/TopInfoContent/index.css';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import { MY_RESERVATION_DATA } from '@/pages/reservation/mocks/mockMyReservationData';

const TopInfoContent = () => {
  const { lessonName, teacherName, lessonImageUrl } = MY_RESERVATION_DATA;

  return (
    <Flex width="100%" paddingTop="6rem">
      <div
        className={topImgStyle}
        style={{
          backgroundImage: `url(${lessonImageUrl})`,
        }}>
        <div className={gradientOverlayStyle} />

        <Flex direction="column" gap="0.8rem" paddingTop="12.4rem" paddingLeft="2rem" className={textWrapperStyle}>
          <Head level="h3" tag="h4" color="white">
            {lessonName}
          </Head>
          <Head level="h5" tag="h6" color="gray4">
            {teacherName}
          </Head>
        </Flex>
      </div>
    </Flex>
  );
};

export default TopInfoContent;
