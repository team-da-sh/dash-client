import { containerStyle, descriptionStyle, imageStyle } from '@/pages/home/components/SliderItem/sliderItem.css';
import Head from '@/shared/components/Head/Head';

interface SliderItemPropTypes {
  imageUrl: string;
  description: string;
  id: number;
}

const SliderItem = ({ imageUrl, description }: SliderItemPropTypes) => {
  // const navigate = useNavigate();

  // const handleShowDetailClick = () => {
  //   if (id === 0) {
  //     return;
  //   }
  //   navigate(ROUTES_CONFIG.class.path(`${id}`));
  // };

  return (
    <div className={containerStyle}>
      <img src={imageUrl} className={imageStyle} alt={`${description} 배너`} />

      <Head level="h2" tag="h3_sb" color="white" className={descriptionStyle}>
        {description}
      </Head>

      {/* <button className={showDetailButtonStyle} onClick={handleShowDetailClick}>
        자세히 보기
        <IcArrowRightWhite14 width={14} height={14} />
      </button> */}
    </div>
  );
};

export default SliderItem;
