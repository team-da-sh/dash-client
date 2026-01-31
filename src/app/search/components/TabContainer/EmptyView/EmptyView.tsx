'use client';

import { containerStyle, textWrapperStyle } from '@/app/search/components/TabContainer/EmptyView/EmptyView.css';
import Head from '@/common/components/Head/Head';
import { EmptyGif } from '@/shared/assets/gif';

const EmptyView = () => {
  return (
    <div className={containerStyle}>
      <img src={EmptyGif.src} width={300} alt="검색 결과가 없어요." />

      <div className={textWrapperStyle}>
        <Head tag="h6_sb">검색 결과가 없어요.</Head>
        <Head tag="h6_sb">다른단어로 검색해 보시겠어요?</Head>
      </div>
    </div>
  );
};

export default EmptyView;
