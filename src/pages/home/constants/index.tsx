// import IcAssetTop1 from '@/shared/assets/svg/IcAssetTop1';
// import IcAssetTop2 from '@/shared/assets/svg/IcAssetTop2';
// import IcAssetTop3 from '@/shared/assets/svg/IcAssetTop3';

import { lazy } from "react";

const IcAssetTop1 = lazy(() => import('@/shared/assets/svg/IcAssetTop1'));
const IcAssetTop2 = lazy(() => import('@/shared/assets/svg/IcAssetTop2'));
const IcAssetTop3 = lazy(() => import('@/shared/assets/svg/IcAssetTop3'));

export const GENRE_ICONS = [
  <IcAssetTop1 width={44} height={44} />,
  <IcAssetTop2 width={44} height={44} />,
  <IcAssetTop3 width={44} height={44} />,
];
