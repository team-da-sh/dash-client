import { useParams } from 'react-router-dom';
import ClassHeader from '@/pages/dancer/components/DancerHeader';
import DancerInfo from '@/pages/dancer/components/DancerInfo';
import TabWrapper from '@/pages/dancer/components/TabWrapper';
import { gradientOverlayStyle, textWrapperStyle, topImgStyle } from '@/pages/dancer/index.css';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Tag from '@/components/Tag';
import Text from '@/components/Text';
import { useGetDancerDetail } from '@/apis/dancer/queries';
import { useIntersectCallback } from '@/utils/useIntersectCallback';
import { genreMapping } from '@/constants/index';

const Dancer = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>해당하는 댄서가 없습니다.</div>;
  }

  const { data, error } = useGetDancerDetail(id);
  const [targetRef, isVisible] = useIntersectCallback(false);

  if (error instanceof Error) {
    return <div>오류: {error.message}</div>;
  }

  if (!data) {
    return <div>댄서 정보가 없습니다.</div>;
  }

  const { imageUrls, genres, nickname } = data;

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
      <DancerInfo dancerData={data} />
      <TabWrapper colorScheme="primary" dancerData={data} />
    </>
  );
};

export default Dancer;
