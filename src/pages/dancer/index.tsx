import ClassHeader from '@/pages/dancer/DancerHeader';
import DancerInfo from '@/pages/dancer/DancerInfo';
import { gradientOverlayStyle, textWrapperStyle, topImgStyle } from '@/pages/dancer/index.css';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Tag from '@/components/Tag';
import Text from '@/components/Text';
import { useIntersect } from '@/utils/useIntersect';
import { DANCER_DATA } from '@/mocks/mockDancerData';

import TabWrapper from '@/pages/dancer/TabWrapper';

const Dancer = () => {
  const [targetRef, isVisible] = useIntersect(false);
  const { nickname, imageUrls, genres } = DANCER_DATA;

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
              {genres.map((g, id) => (
                <Tag key={id} size="medium" type="genre">
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
      <TabWrapper colorScheme="primary" />

    </>
  );
};

export default Dancer;
