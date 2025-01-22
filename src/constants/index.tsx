import TabIntro from '@/pages/class/components/TabWrapper/TabIntro';
import TabLevel from '@/pages/class/components/TabWrapper/TabLevel';
import TabLocationInfo from '@/pages/class/components/TabWrapper/TabLocation';
import TabPeriod from '@/pages/class/components/TabWrapper/TabPeriod';
import TabEducation from '@/pages/dancer/components/TabWrapper/TabEducation';
import TabHistory from '@/pages/dancer/components/TabWrapper/TabExperience';
import TabVideo from '@/pages/dancer/components/TabWrapper/TabVideo';
import { IcLevelAdvanced, IcLevelBasic, IcLevelIntermediate, IcLevelStarter } from '@/assets/svg';
import { LessonDetail } from "@/pages/class/types/index";

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
  { id: 1, label: '학력', component: <TabEducation /> },
  { id: 2, label: '경력', component: <TabHistory /> },
  { id: 3, label: '영상', component: <TabVideo /> },
];

export const CLASS_TABS = [
  { id: 1, label: '소개', component: (lessonData: LessonDetail) => <TabIntro lessonData={lessonData} /> },
  { id: 2, label: '난이도', component: (lessonData: LessonDetail) => <TabLevel lessonData={lessonData} /> },
  { id: 3, label: '기간', component: (lessonData: LessonDetail) => <TabPeriod lessonData={lessonData} /> },
  { id: 4, label: '위치', component: (lessonData: LessonDetail) => <TabLocationInfo lessonData={lessonData} /> },
];

// 장르 영한 변환
export const genreMapping: { [key: string]: string } = {
  HIPHOP: '힙합',
  FEMALEHIPHOP: '피메일힙합',
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
