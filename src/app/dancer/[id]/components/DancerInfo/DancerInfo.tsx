'use client';

import { useRouter } from 'next/navigation';
import DancerClassItem from '@/app/dancer/[id]/components/DancerInfo/DancerClassItem/DancerClassItem';
import {
  rowScrollStyle,
  classItemStyle,
  firstClassItemStyle,
  lastClassItemStyle,
  detailStyle,
  linkStyle,
  infoSectionStyle,
  socialLinksStyle,
  socialLinkStyle,
  classSectionStyle,
  classTitleStyle,
  emptyClassMessageStyle,
} from '@/app/dancer/[id]/components/DancerInfo/dancerInfo.css';
import type { DancerDetailResponseTypes } from '@/app/dancer/[id]/types/api';
import { expandInstagramUrl, expandYouTubeUrl } from '@/app/dancer/[id]/utils/url';
import Divider from '@/common/components/Divider/Divider';
import Head from '@/common/components/Head/Head';
import Text from '@/common/components/Text/Text';
import IcInstagram20 from '@/shared/assets/svg/IcInstagram20';
import IcYoutube20 from '@/shared/assets/svg/IcYoutube20';

const DancerInfo = ({ dancerData }: { dancerData: DancerDetailResponseTypes }) => {
  const { instagram, youtube, detail, nickname, lessons } = dancerData;

  const router = useRouter();

  const handleClassClick = (lessonId: number) => {
    router.push(`/class/${lessonId}`);
  };

  return (
    <>
      <section className={infoSectionStyle}>
        {(instagram || youtube) && (
          <div className={socialLinksStyle}>
            {instagram && (
              <a href={expandInstagramUrl(instagram)} target="_blank" rel="noopener noreferrer">
                <div className={socialLinkStyle}>
                  <IcInstagram20 width="2rem" />
                  <Text tag="b2_m" color="gray5" className={linkStyle}>
                    {instagram}
                  </Text>
                </div>
              </a>
            )}

            {youtube && (
              <a href={expandYouTubeUrl(youtube)} target="_blank" rel="noopener noreferrer">
                <div className={socialLinkStyle}>
                  <IcYoutube20 width="2rem" height="2rem" />
                  <Text tag="b2_m" color="gray5" className={linkStyle}>
                    {youtube}
                  </Text>
                </div>
              </a>
            )}
          </div>
        )}
        <Text tag="b2_m_long" color="gray8" className={detailStyle}>
          {detail}
        </Text>
      </section>

      <section className={classSectionStyle}>
        <Head level="h4" tag="h6_sb" className={classTitleStyle}>
          {nickname}님의 클래스
        </Head>

        {/* 개설한 클래스 없을 때 */}
        {lessons.length === 0 ? (
          <Head level="h5" tag="b1_sb" color="gray9" className={emptyClassMessageStyle}>
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
