import { EmptyGif } from '@/shared/assets/gif';
import Head from '@/shared/components/Head/Head';
import { sprinkles } from '@/shared/styles/sprinkles.css';

const EmptyView = () => {
  return (
    <div
      className={sprinkles({
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 24,
        marginTop: 60,
      })}>
      <img src={EmptyGif} width={300} />

      <div
        className={sprinkles({
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        })}>
        <Head tag="h6_sb">검색 결과가 없어요.</Head>
        <Head tag="h6_sb">다른단어로 검색해 보시겠어요?</Head>
      </div>
    </div>
  );
};

export default EmptyView;
