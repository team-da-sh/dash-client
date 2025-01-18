import {
  descriptionStyle,
  moreButtonStyle,
  moreWrapperStyle,
  containerStyle,
  imageStyle,
} from '@/pages/home/components/SliderItem/index.css';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import { IcArrowRightWhite14 } from '@/assets/svg';

interface SliderItemProps {
  imageUrl: string;
  description: string;
}

const SliderItem = ({ imageUrl, description }: SliderItemProps) => {
  return (
    <Flex position="relative" className={containerStyle}>
      <img src={imageUrl} className={imageStyle} />
      <Head level="h2" tag="h2" color="white" className={descriptionStyle}>
        {description}
      </Head>
      <Flex align="center" gap="0.2rem" position="absolute" className={moreWrapperStyle}>
        <button className={moreButtonStyle}>자세히 보기</button>
        <IcArrowRightWhite14 width={14} height={14} />
      </Flex>
    </Flex>
  );
};

export default SliderItem;
