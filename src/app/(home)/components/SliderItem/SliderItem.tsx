'use client';

import Image from 'next/image';
import { containerStyle, descriptionStyle, imageStyle } from '@/app/(home)/components/SliderItem/sliderItem.css';
import Head from '@/common/components/Head/Head';

interface SliderItemPropTypes {
  imageUrl: string;
  description: string;
  id: number;
  priority?: boolean;
}

const SliderItem = ({ imageUrl, description, priority = false }: SliderItemPropTypes) => {
  return (
    <div className={containerStyle}>
      <Image src={imageUrl} alt={`${description} 배너`} className={imageStyle} fill priority={priority} />

      <Head level="h2" tag="h3_sb" color="white" className={descriptionStyle}>
        {description}
      </Head>
    </div>
  );
};

export default SliderItem;
