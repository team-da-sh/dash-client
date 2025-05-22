import { textStyle } from '@/pages/dancer/components/TabWrapper/TabPrize/TabPrize.css';
import type { DancerDetailResponseTypes } from '@/pages/dancer/types/api';
import Head from '@/shared/components/Head/Head';
import Text from '@/shared/components/Text/Text';
import { sprinkles } from '@/shared/styles/sprinkles.css';

const TabPrize = ({ dancerData }: { dancerData: DancerDetailResponseTypes }) => {
  const { prizes } = dancerData;

  return (
    <section className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 8 })}>
      {prizes?.length === 0 || prizes?.every((prize) => prize === '') ? (
        <Head
          level="h5"
          tag="b1_sb"
          color="gray9"
          className={sprinkles({ display: 'flex', justifyContent: 'center', pb: 14 })}>
          아직 등록된 수상 이력이 없어요
        </Head>
      ) : (
        prizes?.map((prize, id) => (
          <div key={id}>
            <Text tag="b2_m" color="gray7" className={textStyle}>
              {prize}
            </Text>
          </div>
        ))
      )}
    </section>
  );
};

export default TabPrize;
