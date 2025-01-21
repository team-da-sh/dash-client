// Import Swiper styles
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SliderItem from '@/pages/home/components/SliderItem';
import { ADVERTISEMENTS } from '@/pages/home/mocks';
import { useAdvertisements } from '@/apis/home/quries';

interface HomeCarouselProps {}

const HomeCarousel = ({}: HomeCarouselProps) => {
  const { data } = useAdvertisements();

  console.log(data?.data?.advertisements);
  return (
    <Swiper
      loop={true}
      pagination={true}
      speed={500}
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}>
      {data?.data.advertisements.map((data, index) => (
        <SwiperSlide key={`${index}-${data.description}`}>
          <SliderItem imageUrl={data.imageUrl} description={data.description} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeCarousel;
