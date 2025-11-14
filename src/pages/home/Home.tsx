import { useNavigate } from 'react-router-dom';
import Footer from '@/pages/home/components/Footer/Footer';
import HomeCarousel from '@/pages/home/components/HomeCarousel/HomeCarousel';
import LatestLessons from '@/pages/home/components/LatestLessons/LatestLessons';
import PopularGenre from '@/pages/home/components/PopularGenre/PopularGenre';
import UpcomingLessons from '@/pages/home/components/UpcomingLessons/UpcomingLessons';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import Modal from '@/common/components/Modal/Modal';
import { useOpenModal } from '@/common/stores/modal';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import { FetchErrorBoundary } from '@/shared/components/ErrorBoundary/FetchErrorBoundary/FetchErrorBoundary';

const images = '/images/image_kkukgirl.webp';

const preload = (imageArray: string) => {
  const img = new Image();
  img.src = imageArray;
};

const Home = () => {
  preload(images);

  const openModal = useOpenModal();

  const navigate = useNavigate();
  const handleModalOpen = () => {
    openModal(({ close }) => (
      <Modal
        content="모달 오픈2"
        type="default"
        onClose={close}
        onClickHandler={() => {
          navigate(ROUTES_CONFIG.mypage.path);
        }}
      />
    ));
  };

  return (
    <main>
      <BoxButton
        onClick={() =>
          openModal(({ close }) => (
            <Modal content="모달 오픈1" type="default" onClose={close} onClickHandler={handleModalOpen} />
          ))
        }>
        모달오픈
      </BoxButton>
      <HomeCarousel />
      <FetchErrorBoundary>
        <LatestLessons />
      </FetchErrorBoundary>
      <FetchErrorBoundary>
        <PopularGenre />
      </FetchErrorBoundary>
      <FetchErrorBoundary>
        <UpcomingLessons />
      </FetchErrorBoundary>
      <Footer />
    </main>
  );
};

export default Home;
