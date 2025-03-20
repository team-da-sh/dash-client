import { useParams } from 'react-router-dom';
import { useGetDancerDetail } from '@/pages/dancer/apis/queries';
import DancerHeader from '@/pages/dancer/components/DancerHeader/DancerHeader';
import DancerInfo from '@/pages/dancer/components/DancerInfo/DancerInfo';
import TabWrapper from '@/pages/dancer/components/TabWrapper/TabWrapper';
import { gradientOverlayStyle, textWrapperStyle, topImgStyle } from '@/pages/dancer/dancer.css';
import Error from '@/pages/error/Error';
import Flex from '@/shared/components/Flex/Flex';
import Head from '@/shared/components/Head/Head';
import Tag from '@/shared/components/Tag/Tag';
import Text from '@/shared/components/Text/Text';
import { genreMapping } from '@/shared/constants/index';
import { useIntersectCallback } from '@/shared/hooks/useIntersectCallback';

const Dancer = () => {
  const { id } = useParams<{ id: string }>();
  const [targetRef, isVisible] = useIntersectCallback(false);

  if (!id) {
    return <Error />;
  }

  const { data, isError, isLoading } = useGetDancerDetail(id);

  if (isLoading) {
    return <></>;
  }

  if (isError || !data) {
    return <Error />;
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
      <DancerHeader isVisible={isVisible} />
      <DancerInfo dancerData={data} />
      <TabWrapper colorScheme="primary" dancerData={data} />
    </>
  );
};

export default Dancer;
