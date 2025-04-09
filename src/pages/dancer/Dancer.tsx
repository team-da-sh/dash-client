import { useParams } from 'react-router-dom';
import { useGetDancerDetail } from '@/pages/dancer/apis/queries';
import DancerHeader from '@/pages/dancer/components/DancerHeader/DancerHeader';
import DancerInfo from '@/pages/dancer/components/DancerInfo/DancerInfo';
import TabWrapper from '@/pages/dancer/components/TabWrapper/TabWrapper';
import { gradientOverlayStyle, textWrapperStyle, topImgStyle } from '@/pages/dancer/dancer.css';
import Error from '@/pages/error/Error';
import Head from '@/shared/components/Head/Head';
import Tag from '@/shared/components/Tag/Tag';
import Text from '@/shared/components/Text/Text';
import { genreMapping } from '@/shared/constants/index';
import { useIntersectCallback } from '@/shared/hooks/useIntersectCallback';
import { sprinkles } from '@/shared/styles/sprinkles.css';

const Dancer = () => {
  const { id } = useParams<{ id: string }>();
  const [targetRef, isWhite] = useIntersectCallback(false);

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

  const translatedGenres = (genres || []).map((genre) => genreMapping[genre] || genre);

  return (
    <>
      <div
        ref={targetRef}
        className={topImgStyle}
        style={{
          backgroundImage: `url(${imageUrls[0]})`,
        }}>
        <div className={gradientOverlayStyle} />
        <div className={textWrapperStyle}>
          <div className={sprinkles({ display: 'flex', flexDirection: 'row', gap: 4 })}>
            {translatedGenres.map((genre, id) => (
              <Tag key={id} size="medium" type="genre">
                <Text tag="b7" color="white">
                  {genre}
                </Text>
              </Tag>
            ))}
          </div>

          <Head level="h1" tag="h1" color="white">
            {nickname}
          </Head>
        </div>
      </div>
      <DancerHeader isWhite={isWhite} />
      <DancerInfo dancerData={data} />
      <TabWrapper colorScheme="primary" dancerData={data} />
    </>
  );
};

export default Dancer;
