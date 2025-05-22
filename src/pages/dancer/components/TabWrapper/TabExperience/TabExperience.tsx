import { textStyle } from '@/pages/dancer/components/TabWrapper/TabExperience/TabExperience.css';
import type { DancerDetailResponseTypes } from '@/pages/dancer/types/api';
import Head from '@/shared/components/Head/Head';
import Text from '@/shared/components/Text/Text';
import { sprinkles } from '@/shared/styles/sprinkles.css';

const TabExperience = ({ dancerData }: { dancerData: DancerDetailResponseTypes }) => {
  const { experiences } = dancerData;

  return (
    <section className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 8 })}>
      {experiences?.length === 0 || experiences?.every((exp) => exp === '') ? (
        <Head
          level="h5"
          tag="b1_sb"
          color="gray9"
          className={sprinkles({ display: 'flex', justifyContent: 'center', pb: 14 })}>
          아직 등록된 경력이 없어요
        </Head>
      ) : (
        experiences?.map((exp, id) => (
          <div key={id}>
            <Text tag="b2_m" color="gray7" className={textStyle}>
              {exp}
            </Text>
          </div>
        ))
      )}
    </section>
  );
};

export default TabExperience;
