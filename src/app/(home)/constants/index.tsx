import IcAssetTop1 from '@/shared/assets/svg/IcAssetTop1';
import IcAssetTop2 from '@/shared/assets/svg/IcAssetTop2';
import IcAssetTop3 from '@/shared/assets/svg/IcAssetTop3';

const ChoreohongImg = '/images/image_chorehong.webp';
const KkukgirlImg = '/images/image_kkukgirl.webp';
const BannerImg = '/images/img_banner_750.webp';

export const HOME_ADVERTISEMENTS = [
  {
    imageUrl: KkukgirlImg,
    description: `5주 집중 커리큘럼, 스걸파 출연 댄서의 \n 피메일 힙합 기본기 튼튼하게 다지기`,
    id: 25,
  },
  { imageUrl: ChoreohongImg, description: `코레홍과 함께하는 \n NMIXX-DASH 코레오그래피`, id: 24 },
  {
    imageUrl: BannerImg,
    description: `알고 싶던 댄서나 관심있는 클래스를 \n 한 눈에 모아볼 수 있어요!`,
    id: 0,
  },
];

export const GENRE_ICONS = [
  <IcAssetTop1 width={44} height={44} />,
  <IcAssetTop2 width={44} height={44} />,
  <IcAssetTop3 width={44} height={44} />,
];

export const MAX_POPULAR_GENRE_COUNT = 3;

export const DUMMY = 'DUMMY';

export const MAX_REMAINING_DAYS = 4;

export const MIN_REMAINING_DAYS = 0;
