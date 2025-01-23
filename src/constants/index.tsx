import TabIntro from '@/pages/class/components/TabWrapper/TabIntro';
import TabLevel from '@/pages/class/components/TabWrapper/TabLevel';
import TabLocationInfo from '@/pages/class/components/TabWrapper/TabLocation';
import TabPeriod from '@/pages/class/components/TabWrapper/TabPeriod';
import TabEducation from '@/pages/dancer/components/TabWrapper/TabEducation';
import TabHistory from '@/pages/dancer/components/TabWrapper/TabExperience';
import TabVideo from '@/pages/dancer/components/TabWrapper/TabVideo';
import { IcLevelAdvanced, IcLevelBasic, IcLevelIntermediate, IcLevelStarter } from '@/assets/svg';
import { LessonDetailApiResponse } from "@/pages/class/types";
import { DancerDetailApiResponse } from "@/pages/dancer/types";

export const LEVEL = [
  {
    icon: <IcLevelStarter width={36} />,
    title: '입문',
    description: '춤에 처음 도전해보는 초보 댄서예요',
  },
  {
    icon: <IcLevelBasic width={36} />,
    title: '초급',
    description: '장르의 기본기를 본격적으로 배우고 싶어요',
  },
  {
    icon: <IcLevelIntermediate width={36} />,
    title: '중급',
    description: '루틴과 함께 배우며 장르의 이해도를 높이고 싶어요',
  },
  {
    icon: <IcLevelAdvanced width={36} />,
    title: '고급',
    description: '한계에 도전하며 나의 무브를 성장시키고 싶어요',
  },
];

export const GENRE_CATEGORY = [
  [
    '힙합',
    '피메일 힙합',
    '팝핑',
    '브레이킹',
    '왁킹',
    '락킹',
    '하우스',
    '보깅',
    '크럼프',
    '소울',
    '코레오그래피',
    'K-POP',
  ],
];

export const DANCER_TABS = [
  { id: 1, label: '학력', component: (dancerData: DancerDetailApiResponse) => <TabEducation dancerData={dancerData} /> },
  { id: 2, label: '경력', component: (dancerData: DancerDetailApiResponse) => <TabHistory dancerData={dancerData} /> },
  { id: 3, label: '영상', component: (dancerData: DancerDetailApiResponse) => <TabVideo dancerData={dancerData} /> },
];

export const CLASS_TABS = [
  { id: 1, label: '소개', component: (lessonData: LessonDetailApiResponse) => <TabIntro lessonData={lessonData} /> },
  { id: 2, label: '난이도', component: (lessonData: LessonDetailApiResponse) => <TabLevel lessonData={lessonData} /> },
  { id: 3, label: '기간', component: (lessonData: LessonDetailApiResponse) => <TabPeriod lessonData={lessonData} /> },
  { id: 4, label: '위치', component: (lessonData: LessonDetailApiResponse) => <TabLocationInfo lessonData={lessonData} /> },
];

// 장르 영한 변환
export const genreMapping: { [key: string]: string } = {
  HIPHOP: '힙합',
  FEMALE_HIPHOP: '피메일힙합',
  POPPING: '팝핑',
  BRAKING: '브레이킹',
  WAACKING: '왁킹',
  LOCKING: '락킹',
  HOUSE: '하우스',
  VOGUING: '보깅',
  KRUMP: '크럼프',
  SOUL: '소울',
  CHOREOGRAPHY: '코레오그래피',
  KPOP: '케이팝',
};

// 레벨 영한 변환
export const levelMapping: { [key: string]: string } = {
  BEGINNER: '입문',
  NOVICE: '초급',
  INTERMEDIATE: '중급',
  ADVANCED: '고급',
};

// 장르 한영 변환
export const genreEngMapping: { [key: string]: string } = {
  힙합: 'HIPHOP',
  '피메일 힙합': 'FEMALE_HIPHOP',
  팝핑: 'POPPING',
  브레이킹: 'BRAKING',
  왁킹: 'WAACKING',
  락킹: 'LOCKING',
  하우스: 'HOUSE',
  보깅: 'VOGUING',
  크럼프: 'KRUMP',
  소울: 'SOUL',
  코레오그래피: 'CHOREOGRAPHY',
  'K-POP': 'KPOP',
};

// 레벨 한영 변환
export const levelEngMapping: { [key: string]: string } = {
  입문: 'BEGINNER',
  초급: 'NOVICE',
  중급: 'INTERMEDIATE',
  고급: 'ADVANCED',
};

export const labelToSortOptionMap: Record<
  '최신 등록순' | '찜이 많은순' | '마감 임박순',
  'LATEST' | 'MOST_FAVORITE' | 'UPCOMING'
> = {
  '최신 등록순': 'LATEST',
  '찜이 많은순': 'MOST_FAVORITE',
  '마감 임박순': 'UPCOMING',
};

export const TIME_RANGE = [
  { id: 1, label: '1시간' },
  { id: 1.5, label: '1시간 30분' },
  { id: 2, label: '2시간' },
  { id: 2.5, label: '2시간 30분' },
  { id: 3, label: '3시간' },
  { id: 3.5, label: '3시간 30분' },
  { id: 4, label: '4시간' },
  { id: 4.5, label: '4시간 30분' },
  { id: 5, label: '5시간' },
  { id: 5.5, label: '5시간 30분' },
  { id: 6, label: '6시간' },
];

export const CLASS_REGISTER_TOTAL_STEP = 2;

export const BUTTON_TEXT = {
  EXPIRED: '클래스 마감',
  OVER_BOOKED: '클래스 마감',
  OPEN: {
    BOOKED: '신청 완료',
    AVAILABLE: '신청하기',
  },
} as const;

export const DISABLED_STATUS = {
  EXPIRED: true,
  OVER_BOOKED: true,
  OPEN: {
    BOOKED: true,
    AVAILABLE: false,
  },
} as const;

export const YOUTUBE_URL_REGEX = /(?:youtube\.com\/.*v=|youtu\.be\/)([^&]+)/;