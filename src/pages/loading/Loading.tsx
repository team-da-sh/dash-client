import { loadingContainerStyle, loadingInnerWrapperStyle } from '@/pages/loading/loading.css';
import { LoadingGif } from '@/shared/assets/gif';
import Head from '@/shared/components/Head/Head';

const Loading = () => {
  return (
    <div className={loadingContainerStyle}>
      <div className={loadingInnerWrapperStyle}>
        <img src={LoadingGif} width={300} alt="로딩 중" />
        <Head tag="h6_sb" color="gray6">
          로딩 중...
        </Head>
      </div>
    </div>
  );
};

export default Loading;
