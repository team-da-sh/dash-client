import { useParams } from 'react-router-dom';
import ClassHeader from '@/pages/dancer/components/DancerHeader';
import DancerInfo from '@/pages/dancer/components/DancerInfo';
import TabWrapper from '@/pages/dancer/components/TabWrapper';
import { gradientOverlayStyle, textWrapperStyle, topImgStyle } from '@/pages/dancer/index.css';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Tag from '@/components/Tag';
import Text from '@/components/Text';
import { useDancerDetail } from '@/apis/dancer/axios';
import { useIntersectCallback } from '@/utils/useIntersectCallback';
import { genreMapping } from '@/constants/index';
import { DancerDetail } from './types';

// import { DANCER_DATA } from '@/pages/dancer/mocks/mockDancerData';

const Dancer = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>Error: lessonId is missing</div>;
  }

  const { data, error } = useDancerDetail(id);
  const [targetRef, isVisible] = useIntersectCallback(false);

  console.log(isVisible);
  if (error instanceof Error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>No lesson data available</div>;
  }
  const { imageUrls, genres, nickname, instagram, youtube, detail, lessons } = data as DancerDetail;

  // 장르 매핑
  const translatedGenres = (genres || []).map((genre) => genreMapping[genre] || genre);

  return (
    <>
      <Flex width="100%">
        <div
          ref={targetRef}
          className={topImgStyle}
          style={{
            backgroundImage: `url(${imageUrls[0]})`,
          }}>
          <div className={gradientOverlayStyle} />
          <Flex direction="column" gap="0.8rem" paddingTop="28.9rem" paddingLeft="2rem" className={textWrapperStyle}>
            <Flex direction="row" gap="0.4rem">
              {translatedGenres.map((genre, id) => (
                <Tag key={id} size="medium" type="genre">
                  <Text tag="b7" color="white">
                    {genre}
                  </Text>
                </Tag>
              ))}
            </Flex>

            <Head level="h1" tag="h1" color="white">
              {nickname}
            </Head>
          </Flex>
        </div>
      </Flex>
      <ClassHeader isVisible={isVisible} />
      <DancerInfo instagram={instagram} youtube={youtube} detail={detail} nickname={nickname} lessons={lessons} educations={[]} experiences={[]} imageUrls={[]} videoUrls={[]} genres={[]}/>
      <TabWrapper colorScheme="primary" />
    </>
  );
}; 

export default Dancer;
