import * as styles from '@/pages/dancer/components/TabWrapper/TabVideo/tabVideo.css';
import type { DancerDetailResponseTypes } from '@/pages/dancer/types/api';
import { getYoutubeEmbedUrl } from '@/shared/constants/regex';

const TabVideo = ({ dancerData }: { dancerData: DancerDetailResponseTypes }) => {
  const { videoUrls } = dancerData;

  return (
    <section className={styles.videoWrapperStyle}>
      {videoUrls.map((url, id) => {
        const embedUrl = getYoutubeEmbedUrl(url);
        return (
          <div key={id} className={styles.videoItemStyle}>
            <iframe
              loading="lazy"
              className={styles.iframeStyle}
              src={embedUrl || ''}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={`video-${id}`}
            />
          </div>
        );
      })}
    </section>
  );
};

export default TabVideo;
