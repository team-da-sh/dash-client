import {
  videoWrapperStyle,
  videoItemStyle,
  iframeStyle,
} from '@/pages/dancer/components/TabWrapper/TabVideo/index.css';
import { DancerDetailApiResponse } from '@/pages/dancer/types';
import Flex from '@/components/Flex';
import { getYoutubeEmbedUrl } from '@/constants/regex';

interface TabVideoProps {
  dancerData: DancerDetailApiResponse;
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
