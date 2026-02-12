'use client';

import {
  iframeStyle,
  sectionStyle,
  emptyMessageStyle,
  videoWrapperStyle,
} from '@/app/dancer/[id]/components/TabWrapper/TabVideo/tabVideo.css';
import type { DancerDetailResponseTypes } from '@/app/dancer/[id]/types/api';
import Head from '@/common/components/Head/Head';
import { getYoutubeEmbedUrl } from '@/shared/constants/regex';

const TabVideo = ({ dancerData }: { dancerData: DancerDetailResponseTypes }) => {
  const { videoUrls } = dancerData;

  const validVideoUrls = videoUrls.map(getYoutubeEmbedUrl).filter((url): url is string => url !== null);

  return (
    <section className={sectionStyle}>
      {validVideoUrls.length === 0 ? (
        <Head level="h5" tag="b1_sb" color="gray9" className={emptyMessageStyle}>
          아직 등록된 영상이 없어요
        </Head>
      ) : (
        validVideoUrls.map((embedUrl, id) => (
          <div key={id} className={videoWrapperStyle}>
            <iframe
              loading="lazy"
              className={iframeStyle}
              src={embedUrl}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={`video-${id}`}
            />
          </div>
        ))
      )}
    </section>
  );
};

export default TabVideo;
