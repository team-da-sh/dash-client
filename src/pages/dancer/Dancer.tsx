import { useParams } from 'react-router-dom';
import { useGetDancerDetail } from '@/pages/dancer/apis/queries';
import DancerInfo from '@/pages/dancer/components/DancerInfo/DancerInfo';
import TabWrapper from '@/pages/dancer/components/TabWrapper/TabWrapper';
import * as styles from '@/pages/dancer/dancer.css';
import Error from '@/pages/error/Error';
import Head from '@/shared/components/Head/Head';
import Tag from '@/shared/components/Tag/Tag';
import Text from '@/shared/components/Text/Text';
import { genreMapping } from '@/shared/constants/index';
import { sprinkles } from '@/shared/styles/sprinkles.css';

const Dancer = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <Error />;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
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
        className={styles.topImgStyle}
        style={{
          backgroundImage: `url(${imageUrls[0]})`,
        }}>
        <div className={styles.gradientOverlayStyle} />
        <div className={styles.textWrapperStyle}>
          <div className={sprinkles({ display: 'flex', flexDirection: 'row', gap: 4 })}>
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
