import { videoWrapperStyle, videoItemStyle, iframeStyle } from '@/pages/dancer/TabWrapper/TabVideo/index.css';
import Flex from '@/components/Flex';
import { DANCER_DATA } from '@/pages/dancer/mocks/mockDancerData';

const TabVideo = () => {
  const { videoUrls } = DANCER_DATA;

  const getYoutubeEmbedUrl = (url: string) => {
    const videoId = url.match(/(?:youtube\.com\/.*v=|youtu\.be\/)([^&]+)/)?.[1];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  };

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
                title={`video-${id}`}/>
            </div>
          );
        })}
      </div>
    </Flex>
  );
};

export default TabVideo;
