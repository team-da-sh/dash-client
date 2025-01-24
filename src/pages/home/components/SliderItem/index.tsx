import { useNavigate } from 'react-router-dom';
import {
  descriptionStyle,
  moreButtonStyle,
  moreWrapperStyle,
  containerStyle,
  imageStyle,
  description2Style,
} from '@/pages/home/components/SliderItem/index.css';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { IcArrowRightWhite14 } from '@/assets/svg';

interface SliderItemProps {
  imageUrl: string;
  description: string;
  description2: string;
  id: number;
}

const SliderItem = ({ imageUrl, description, description2, id }: SliderItemProps) => {
  const navigate = useNavigate();
  const handleDetailClick = () => {
    if (id === 0) {
      return;
    }
    navigate(ROUTES_CONFIG.class.path(`${id}`));
  };
  return (
    <Flex position="relative" className={containerStyle}>
      <img src={imageUrl} className={imageStyle} />

      <Head level="h2" tag="h2" color="white" className={descriptionStyle}>
        {description}
      </Head>
      <Head level="h2" tag="h2" color="white" className={description2Style}>
        {description2}
      </Head>

      <Flex align="center" gap="0.2rem" position="absolute" className={moreWrapperStyle}>
        <button className={moreButtonStyle} onClick={handleDetailClick}>
          자세히 보기
        </button>
        <IcArrowRightWhite14 width={14} height={14} />
      </Flex>
    </Flex>
  );
};

export default SliderItem;
