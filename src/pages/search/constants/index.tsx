import { defaultSortTagProps } from '@/pages/search/types/defaultSortTag';
import { IcArrowUnderGray } from '@/assets/svg';

export const DEFAULT_SORT_TAGS: defaultSortTagProps[] = [
  { label: '장르', icon: <IcArrowUnderGray width={18} /> },
  { label: '난이도', icon: <IcArrowUnderGray width={18} /> },
  { label: '기간', icon: <IcArrowUnderGray width={18} /> },
];
