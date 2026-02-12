// Next: public 폴더 정적 파일은 경로 문자열로 참조 (import 불가)
const GENRE_IMAGES = {
  breaking: '/images/image_genre_breaking.png',
  choreo: '/images/image_genre_choreo.png',
  femalehiphop: '/images/image_genre_femalehiphop.png',
  hiphop: '/images/image_genre_hiphop.png',
  house: '/images/image_genre_house.png',
  kpop: '/images/image_genre_kpop.png',
  krump: '/images/image_genre_krump.png',
  locking: '/images/image_genre_locking.png',
  popping: '/images/image_genre_popping.png',
  soul: '/images/image_genre_soul.png',
  voguing: '/images/image_genre_voguing.png',
  waacking: '/images/image_genre_waacking.png',
} as const;

export const GENRE_INFO = [
  { genre: '힙합', url: GENRE_IMAGES.hiphop },
  { genre: '피메일힙합', url: GENRE_IMAGES.femalehiphop },
  { genre: '팝핑', url: GENRE_IMAGES.popping },
  { genre: '브레이킹', url: GENRE_IMAGES.breaking },
  { genre: '왁킹', url: GENRE_IMAGES.waacking },
  { genre: '락킹', url: GENRE_IMAGES.locking },
  { genre: '하우스', url: GENRE_IMAGES.house },
  { genre: '보깅', url: GENRE_IMAGES.voguing },
  { genre: '크럼프', url: GENRE_IMAGES.krump },
  { genre: '소울', url: GENRE_IMAGES.soul },
  { genre: '코레오그래피', url: GENRE_IMAGES.choreo },
  { genre: '케이팝', url: GENRE_IMAGES.kpop },
];
