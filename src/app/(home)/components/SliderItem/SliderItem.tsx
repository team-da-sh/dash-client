'use client';

import { containerStyle, descriptionStyle, imageStyle } from '@/app/(home)/components/SliderItem/sliderItem.css';
import Head from '@/common/components/Head/Head';

interface SliderItemPropTypes {
  imageUrl: string;
  description: string;
  id: number;
}

const SliderItem = ({ imageUrl, description }: SliderItemPropTypes) => {
  return (
    <div className={containerStyle}>
      <img src={imageUrl} className={imageStyle} alt={`${description} 배너`} />

      <Head level="h2" tag="h3_sb" color="white" className={descriptionStyle}>
        {description}
      </Head>
    </div>
  );
};

export default SliderItem;
