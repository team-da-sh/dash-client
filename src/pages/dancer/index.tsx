import ClassHeader from '@/pages/dancer/components/DancerHeader';
import DancerInfo from '@/pages/dancer/components/DancerInfo';
import TabWrapper from '@/pages/dancer/components/TabWrapper';
import { gradientOverlayStyle, textWrapperStyle, topImgStyle } from '@/pages/dancer/index.css';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Tag from '@/components/Tag';
import Text from '@/components/Text';
import { genreMapping } from '@/utils/genreLevelTranslator';
import { useIntersect } from '@/utils/useIntersect';
import { DANCER_DATA } from '@/pages/dancer/mocks/mockDancerData';

const Dancer = () => {
  const [targetRef, isVisible] = useIntersect(false);
  const { nickname, imageUrls, genres } = DANCER_DATA;

  // 장르 변환
  const translatedGenres = genres.map((genre) => genreMapping[genre] || genre);
  
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

      <DancerInfo />
      <TabWrapper colorScheme="primary" />
    </>
  );
};

export default Dancer;
