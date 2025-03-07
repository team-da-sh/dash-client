import { defaultSortTagProps } from '@/pages/search/types/defaultSortTag';
import IcArrowUnderGray from '@/shared/assets/svg/IcArrowUnderGray';

export const DEFAULT_SORT_TAGS: defaultSortTagProps[] = [
  { label: '장르', icon: <IcArrowUnderGray width={18} /> },
  { label: '난이도', icon: <IcArrowUnderGray width={18} /> },
  { label: '기간', icon: <IcArrowUnderGray width={18} /> },
];

export const SORT_LABELS = {
  LATEST: '최신 등록순',
  MOST_LIKED: '찜이 많은순',
  CLOSING_SOON: '마감 임박순',
} as const;
