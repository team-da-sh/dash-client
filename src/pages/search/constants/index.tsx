import { defaultSortTagProps } from '@/pages/search/types/defaultSortTag';
import { IcArrowUnderGray } from '@/assets/svg';

export const DEFAULT_SORT_TAGS: defaultSortTagProps[] = [
  { label: '장르', icon: <IcArrowUnderGray width={18} /> },
  { label: '난이도', icon: <IcArrowUnderGray width={18} /> },
  { label: '기간', icon: <IcArrowUnderGray width={18} /> },
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
