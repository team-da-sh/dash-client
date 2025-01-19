import ClassHeader from '@/pages/dancer/DancerHeader';
import DancerInfo from '@/pages/dancer/DancerInfo';
import { gradientOverlayStyle, textWrapperStyle, topImgStyle } from '@/pages/dancer/index.css';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Tag from '@/components/Tag';
import Text from '@/components/Text';
import { useIntersect } from '@/utils/useIntersect';
import { DANCER_DATA } from '@/mocks/mockDancerData';

const Dancer = () => {
  const [targetRef, isVisible] = useIntersect(false);
  const { nickname, imageUrl, genre } = DANCER_DATA;

  return (
    <>
      <Flex width="100%">
        <div
          ref={targetRef}
          className={topImgStyle}
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}>
          <div className={gradientOverlayStyle} />
          <Flex direction="column" gap="0.8rem" paddingTop="28.9rem" paddingLeft="2rem" className={textWrapperStyle}>
            <Flex direction="row" gap="0.4rem">
              {genre.map((g, index) => (
                <Tag key={index} size="medium" type="genre">
                  <Text tag="b7" color="white">
                    {g}
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
    </>
  );
};

export default Dancer;
