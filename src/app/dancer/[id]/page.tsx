'use client';

import { use, useEffect } from 'react';
import { useGetDancerDetail } from '@/app/dancer/[id]/apis/queries';
import DancerInfo from '@/app/dancer/[id]/components/DancerInfo/DancerInfo';
import TabWrapper from '@/app/dancer/[id]/components/TabWrapper/TabWrapper';
import { genresWrapperStyle, gradientOverlayStyle, textWrapperStyle, topImgStyle } from '@/app/dancer/[id]/index.css';
import Head from '@/common/components/Head/Head';
import Tag from '@/common/components/Tag/Tag';
import Text from '@/common/components/Text/Text';
import { useEventLogger } from '@/lib/analytics';
import { genreMapping } from '@/shared/constants/index';

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { logPageViewEvent } = useEventLogger();
  const { id } = use(params);
  const dancerId = Number(id);

  const isValidDancerId = Number.isInteger(dancerId) && dancerId > 0;

  const { data, isPending, isError } = useGetDancerDetail(dancerId, {
    enabled: Boolean(isValidDancerId),
  });

  useEffect(() => {
    if (!data) return;
    logPageViewEvent('teacher_view', {
      teacher_name: data.nickname,
      teacher_id: dancerId,
      referrer_page: document.referrer,
      has_sns: data.instagram || data.youtube ? true : false,
      has_video: data.videoUrls ? data.videoUrls.length > 0 : false,
      has_experience: data.experiences ? data.experiences.length > 0 : false,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  if (!isValidDancerId) {
    throw new Error('Invalid dancer id');
  }

  if (isPending) {
    return <></>;
  }

  if (isError || !data || data.detail === '탈퇴한 회원입니다.') {
    throw new Error('Failed to load dancer');
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
            {translatedGenres.map((genre, idx) => (
              <Tag key={idx} size="medium" type="genre">
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
      <DancerInfo dancerData={data} id={dancerId} />
      <TabWrapper colorScheme="primary" dancerData={data} />
    </>
  );
}
