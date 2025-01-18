import DancerClassItem from '@/pages/dancer/DancerInfo/DancerClassItem';
import Divider from '@/components/Divider';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Text from '@/components/Text';
import { IcInstagram20, IcYoutube20 } from '@/assets/svg';
import { DANCER_DATA } from '@/mocks/mockDancerData';
import {
  classTitleStyle,
  rowScrollStyle,
  classItemStyle,
  firstClassItemStyle,
  lastClassItemStyle,
} from './index.css';

const DancerInfo = () => {
  const { instagram, youtube, detail, nickname, classes } = DANCER_DATA;

  const instagramHandle = instagram.split('/').filter(Boolean).pop();
  const youtubeHandle = youtube.split('/').filter(Boolean).pop();

  return (
    <>
      <Flex
        direction="column"
        paddingTop="2rem"
        paddingRight="2rem"
        paddingLeft="2rem"
        paddingBottom="3.2rem"
        gap="2rem"
      >
        <Flex gap="2.8rem">
          {instagram && (
            <a href={instagram} target="_blank" rel="noopener noreferrer">
              <Flex direction="row" gap="0.9rem" justify="center" align="center">
                <IcInstagram20 width="2rem" />
                <Text tag="b2" color="gray5">
                  {instagramHandle}
                </Text>
              </Flex>
            </a>
          )}

          {youtube && (
            <a href={youtube} target="_blank" rel="noopener noreferrer">
              <Flex direction="row" gap="0.9rem" justify="center" align="center">
                <IcYoutube20 width="2rem" height="2rem" />
                <Text tag="b2" color="gray5">
                  {youtubeHandle}
                </Text>
              </Flex>
            </a>
          )}
        </Flex>

        <Text tag="b3" color="gray8">
          {detail}
        </Text>
      </Flex>

      <Flex direction="column" gap="1.2rem">
        <Head level="h4" tag="h5" className={classTitleStyle}>
          {nickname}님의 클래스
        </Head>

        <div className={rowScrollStyle}>
          {classes.map((data, index) => {
            const isFirst = index === 0;
            const isLast = index === classes.length - 1;

            return (
              <div
                key={data.id}
                className={[
                  classItemStyle,
                  isFirst && firstClassItemStyle,
                  isLast && lastClassItemStyle,
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                <DancerClassItem
                  lessonImageUrl={data.imageUrl}
                  lessonStartDateTime={data.lessonStartDateTime}
                  lessonGenre={data.lessonGenre}
                  lessonLevel={data.lessonLevel}
                  lessonName={data.name}
                />
              </div>
            );
          })}
        </div>
        <Divider color="gray1" length="100%" thickness="0.8rem" />
      </Flex>
    </>
  );
};

export default DancerInfo;
