import IcSpeaker3D from '@/shared/assets/svg/IcSpeaker3D';
import Head from '@/shared/components/Head/Head';
import Text from '@/shared/components/Text/Text';
import { sprinkles } from '@/shared/styles/sprinkles.css';

const SearchIntro = () => {
  return (
    <div className={sprinkles({ display: 'flex', alignItems: 'center', gap: 8 })}>
      <IcSpeaker3D width={52} />

      <div className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 4 })}>
        <Text tag="b3_m" color="gray7">
          어떤 클래스를 들어야 할지 모르겠다면?
        </Text>
        <div className={sprinkles({ display: 'flex' })}>
          <Head tag="b1_sb" color="main4">
            장르 or 댄서네임
          </Head>
          <Head tag="b1_sb" color="black">
            을 검색해 보세요!
          </Head>
        </div>
      </div>
    </div>
  );
};

export default SearchIntro;
