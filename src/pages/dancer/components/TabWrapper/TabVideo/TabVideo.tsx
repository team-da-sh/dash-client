import * as styles from '@/pages/dancer/components/TabWrapper/TabVideo/tabVideo.css';
import type { DancerDetailResponseTypes } from '@/pages/dancer/types/api';
import Head from '@/shared/components/Head/Head';
import { getYoutubeEmbedUrl } from '@/shared/constants/regex';
import { sprinkles } from '@/shared/styles/sprinkles.css';

const TabVideo = ({ dancerData }: { dancerData: DancerDetailResponseTypes }) => {
  const { videoUrls } = dancerData;

  const validVideoUrls = videoUrls.map(getYoutubeEmbedUrl).filter((url): url is string => url !== null);

  return (
    <section className={sprinkles({ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' })}>
      {validVideoUrls.length === 0 ? (
        <Head
          level="h5"
          tag="b1_sb"
          color="gray9"
          className={sprinkles({ display: 'flex', justifyContent: 'center', pb: 14 })}>
          아직 등록된 영상이 없어요
        </Head>
      ) : (
        validVideoUrls.map((embedUrl, id) => (
          <div key={id} className={sprinkles({ position: 'relative', width: 335, height: 188 })}>
            <iframe
              loading="lazy"
              className={styles.iframeStyle}
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
