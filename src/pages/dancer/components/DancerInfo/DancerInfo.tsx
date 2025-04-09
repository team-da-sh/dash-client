import { useNavigate } from 'react-router-dom';
import DancerClassItem from '@/pages/dancer/components/DancerInfo/DancerClassItem/DancerClassItem';
import * as styles from '@/pages/dancer/components/DancerInfo/dancerInfo.css';
import type { DancerDetailResponseTypes } from '@/pages/dancer/types/api';
import { extractUsernameFromUrl } from '@/pages/dancer/utils/url';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import IcInstagram20 from '@/shared/assets/svg/IcInstagram20';
import IcYoutube20 from '@/shared/assets/svg/IcYoutube20';
import Divider from '@/shared/components/Divider/Divider';
import Head from '@/shared/components/Head/Head';
import Text from '@/shared/components/Text/Text';
import { sprinkles } from '@/shared/styles/sprinkles.css';

const DancerInfo = ({ dancerData }: { dancerData: DancerDetailResponseTypes }) => {
  const { instagram, youtube, detail, nickname, lessons } = dancerData;

  const instagramHandle = extractUsernameFromUrl(instagram);
  const youtubeHandle = extractUsernameFromUrl(youtube);

  const navigate = useNavigate();

  const handleClassClick = (lessonId: number) => {
    const path = ROUTES_CONFIG.class.path(lessonId.toString());
    navigate(path);
  };

  return (
    <>
      <section
        className={sprinkles({ display: 'flex', flexDirection: 'column', pt: 20, pr: 20, pl: 20, pb: 32, gap: 20 })}>
        <div className={sprinkles({ display: 'flex', gap: 28 })}>
          {instagram && (
            <a href={instagram} target="_blank" rel="noopener noreferrer">
              <div className={sprinkles({ display: 'flex', flexDirection: 'row', gap: 9 })}>
                <IcInstagram20 width="2rem" />
                <Text tag="b2" color="gray5" className={styles.linkStyle}>
                  {instagramHandle}
                </Text>
              </div>
            </a>
          )}

          {youtube && (
            <a href={youtube} target="_blank" rel="noopener noreferrer">
              <div className={sprinkles({ display: 'flex', flexDirection: 'row', gap: 9 })}>
                <IcYoutube20 width="2rem" height="2rem" />
                <Text tag="b2" color="gray5" className={styles.linkStyle}>
                  {youtubeHandle}
                </Text>
              </div>
            </a>
          )}
        </div>

        <Text tag="b3" color="gray8" className={styles.detailStyle}>
          {detail}
        </Text>
      </section>

      <section className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 12 })}>
        <Head level="h4" tag="h5" className={styles.classTitleStyle}>
          {nickname}님의 클래스
        </Head>

        {/* 개설한 클래스 없을 때 */}
        {lessons.length === 0 ? (
          <Head level="h5" tag="h6" color="gray9" className={styles.emptyStyle}>
            아직 개설한 클래스가 없어요
          </Head>
        ) : (
          <div className={styles.rowScrollStyle}>
            {lessons.map((data, id) => {
              const isFirst = id === 0;
              const isLast = id === lessons.length - 1;

              return (
                <div
                  key={data.id}
                  className={[
                    styles.classItemStyle,
                    isFirst && styles.firstClassItemStyle,
                    isLast && styles.lastClassItemStyle,
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  onClick={() => handleClassClick(data.id)}>
                  <DancerClassItem {...data} />
                </div>
              );
            })}
          </div>
        )}
      </section>
      <Divider color="gray1" length="100%" thickness="0.8rem" />
    </>
  );
};

export default DancerInfo;
