import { useParams } from 'react-router-dom';
import { useGetDancerDetail } from '@/pages/dancer/apis/queries';
import DancerInfo from '@/pages/dancer/components/DancerInfo/DancerInfo';
import TabWrapper from '@/pages/dancer/components/TabWrapper/TabWrapper';
import { topImgStyle, gradientOverlayStyle, textWrapperStyle, genresWrapperStyle } from '@/pages/dancer/dancer.css';
import ErrorPage from '@/pages/error/ErrorPage';
import Head from '@/shared/components/Head/Head';
import Tag from '@/shared/components/Tag/Tag';
import Text from '@/shared/components/Text/Text';
import { genreMapping } from '@/shared/constants/index';

const Dancer = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isError, isPending } = useGetDancerDetail(id ?? '', {
    enabled: Boolean(id),
  });

  if (isPending || !id) {
    return <></>;
  }

  if (isError || !data) {
    return <ErrorPage />;
  }

  const { imageUrls, genres, nickname } = data;

  const translatedGenres = (genres || []).map((genre) => genreMapping[genre] || genre);

  return (
    <>
      <div
        className={topImgStyle}
        role="img"
        aria-label={`${nickname}의 대표 이미지`}
        style={{
          backgroundImage: `url(${imageUrls[0]})`,
        }}>
        <div className={gradientOverlayStyle} />
        <div className={textWrapperStyle}>
          <div className={genresWrapperStyle} role="list">
            {translatedGenres.map((genre, id) => (
              <Tag key={id} size="medium" type="genre">
                <Text tag="b3_m" color="white">
                  {genre}
                </Text>
              </Tag>
            ))}
          </div>

          <Head level="h1" tag="h1_sb" color="white">
            {nickname}
          </Head>
        </div>
      </div>
      <DancerInfo dancerData={data} />
      <TabWrapper colorScheme="primary" dancerData={data} />
    </>
  );
};

export default Dancer;
