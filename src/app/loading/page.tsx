'use client';

import { loadingContainerStyle, loadingInnerWrapperStyle } from '@/app/loading/index.css';
import Head from '@/common/components/Head/Head';
import { LoadingGif } from '@/shared/assets/gif';

export default function Page() {
  return (
    <div className={loadingContainerStyle}>
      <div className={loadingInnerWrapperStyle}>
        <img src={LoadingGif.src} width={300} alt="로딩 중" />
        <Head tag="h6_sb" color="gray6">
          로딩 중...
        </Head>
      </div>
    </div>
  );
}
