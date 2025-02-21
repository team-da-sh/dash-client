import { useNavigate } from 'react-router-dom';
import DancerClassItem from '@/pages/dancer/components/DancerInfo/DancerClassItem/DancerClassItem';
import {
  classItemStyle,
  classTitleStyle,
  detailStyle,
  emptyStyle,
  firstClassItemStyle,
  lastClassItemStyle,
  linkStyle,
  rowScrollStyle,
} from '@/pages/dancer/components/DancerInfo/dancerInfo.css';
import { DancerDetailResponse } from '@/pages/dancer/types/api';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import IcInstagram20 from '@/shared/assets/svg/IcInstagram20';
import IcYoutube20 from '@/shared/assets/svg/IcYoutube20';
import Divider from '@/shared/components/Divider/Divider';
import Flex from '@/shared/components/Flex/Flex';
import Head from '@/shared/components/Head/Head';
import Text from '@/shared/components/Text/Text';

const DancerInfo = ({ dancerData }: { dancerData: DancerDetailResponse }) => {
  const { instagram, youtube, detail, nickname, lessons } = dancerData;

  // 쿼리 파라미터를 제거하고 사용자 이름만 추출하는 함수
  const extractUsername = (url: string | undefined) => {
    if (!url) return '';

    // 쿼리 파라미터를 제거
    const cleanedUrl = url.split('?')[0];

    // 마지막 '/' 이후의 부분이 사용자 이름
    return cleanedUrl.split('/').filter(Boolean).pop() || '';
  };
  const instagramHandle = extractUsername(instagram);
  const youtubeHandle = extractUsername(youtube);

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
