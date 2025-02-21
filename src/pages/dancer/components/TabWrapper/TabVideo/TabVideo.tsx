import {
  iframeStyle,
  videoItemStyle,
  videoWrapperStyle,
} from '@/pages/dancer/components/TabWrapper/TabVideo/tabVideo.css';
import { DancerDetailResponse } from '@/pages/dancer/types/api';
import Flex from '@/shared/components/Flex/Flex';
import { getYoutubeEmbedUrl } from '@/shared/constants/regex';

interface TabVideoProps {
  dancerData: DancerDetailResponse;
}

const TabVideo = ({ dancerData }: TabVideoProps) => {
  const { videoUrls } = dancerData;

  return (
    <Flex justify="center">
      <div className={videoWrapperStyle}>
        {videoUrls.map((url, id) => {
          const embedUrl = getYoutubeEmbedUrl(url);
          return (
            <div key={id} className={videoItemStyle}>
              <iframe
                className={iframeStyle}
                src={embedUrl || ''}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`video-${id}`}
              />
            </div>
          );
        })}
      </div>
    </Flex>
  );
};

export default TabVideo;
