'use client';

import {
  textStyle,
  sectionStyle,
  emptyMessageStyle,
} from '@/app/dancer/[id]/components/TabWrapper/TabPrize/TabPrize.css';
import type { DancerDetailResponseTypes } from '@/app/dancer/[id]/types/api';
import Head from '@/common/components/Head/Head';
import Text from '@/common/components/Text/Text';

const TabPrize = ({ dancerData }: { dancerData: DancerDetailResponseTypes }) => {
  const { prizes } = dancerData;

  return (
    <section className={sectionStyle}>
      {prizes?.length === 0 || prizes?.every((prize) => prize === '') ? (
        <Head level="h5" tag="b1_sb" color="gray9" className={emptyMessageStyle}>
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
