'use client';

import SliderItem from '@/app/(home)/components/SliderItem/SliderItem';
import { HOME_ADVERTISEMENTS } from '@/app/(home)/constants';
import Carousel from '@/common/components/Carousel/Carousel';

const HomeCarousel = () => (
  <Carousel
    slides={HOME_ADVERTISEMENTS}
    renderSlide={(slide, isPriority) => <SliderItem {...slide} priority={isPriority} />}
  />
);

export default HomeCarousel;
