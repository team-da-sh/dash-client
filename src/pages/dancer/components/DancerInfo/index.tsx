import { useNavigate } from 'react-router-dom';
import DancerClassItem from '@/pages/dancer/components/DancerInfo/DancerClassItem';
import { DancerDetailApiResponse } from '@/pages/dancer/types';
import Divider from '@/components/Divider';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Text from '@/components/Text';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { IcInstagram20, IcYoutube20 } from '@/assets/svg';
import {
  classTitleStyle,
  rowScrollStyle,
  classItemStyle,
  firstClassItemStyle,
  lastClassItemStyle,
  detailStyle,
  emptyStyle,
  linkStyle,
} from '@/pages/dancer/components/DancerInfo/index.css';

const DancerInfo = ({ dancerData }: { dancerData: DancerDetailApiResponse }) => {
  
  const { instagram, youtube, detail, nickname, lessons } = dancerData;

  const instagramHandle = instagram?.split('/').filter(Boolean).pop();
  const youtubeHandle = youtube?.split('/').filter(Boolean).pop();

  const navigate = useNavigate();

  const handleClassClick = (lessonId: number) => {
    const path = ROUTES_CONFIG.class.path(lessonId.toString());
    navigate(path);
  };

  return (
    <>
      <Flex
        direction="column"
        paddingTop="2rem"
        paddingRight="2rem"
        paddingLeft="2rem"
        paddingBottom="3.2rem"
        gap="2rem">
        <Flex gap="2.8rem">
          {instagram && (
            <a href={instagram} target="_blank" rel="noopener noreferrer">
              <Flex direction="row" gap="0.9rem" justify="center" align="center">
                <IcInstagram20 width="2rem" />
                <Text tag="b2" color="gray5" className={linkStyle}>
                  {instagramHandle}
                </Text>
              </Flex>
            </a>
          )}

          {youtube && (
            <a href={youtube} target="_blank" rel="noopener noreferrer">
              <Flex direction="row" gap="0.9rem" justify="center" align="center">
                <IcYoutube20 width="2rem" height="2rem" />
                <Text tag="b2" color="gray5" className={linkStyle}>
                  {youtubeHandle}
                </Text>
              </Flex>
            </a>
          )}
        </Flex>

        <Text tag="b3" color="gray8" className={detailStyle}>
          {detail}
        </Text>
      </Flex>

      <Flex direction="column" gap="1.2rem">
        <Head level="h4" tag="h5" className={classTitleStyle}>
          {nickname}님의 클래스
        </Head>

        {/* 개설한 클래스 없을 때 */}
        {lessons.length === 0 ? (
          <Head level="h5" tag="h6" color="gray9" className={emptyStyle}>
            아직 개설한 클래스가 없어요
          </Head>
        ) : (
          <div className={rowScrollStyle}>
            {lessons.map((data, id) => {
              const isFirst = id === 0;
              const isLast = id === lessons.length - 1;

              return (
                <div
                  key={data.id}
                  className={[classItemStyle, isFirst && firstClassItemStyle, isLast && lastClassItemStyle]
                    .filter(Boolean)
                    .join(' ')}
                  onClick={() => handleClassClick(data.id)}>
                  <DancerClassItem
                    lessonImageUrl={data.imageUrl}
                    lessonRemainingDays={data.remainingDays}
                    lessonGenre={data.genre}
                    lessonLevel={data.level}
                    lessonName={data.name}
                  />
                </div>
              );
            })}
          </div>
        )}
      </Flex>
      <Divider color="gray1" length="100%" thickness="0.8rem" />
    </>
  );
};

export default DancerInfo;
