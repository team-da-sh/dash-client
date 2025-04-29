import type { DancerDetailResponseTypes } from '@/pages/dancer/types/api';
import Head from '@/shared/components/Head/Head';
import Text from '@/shared/components/Text/Text';
import { sprinkles } from '@/shared/styles/sprinkles.css';

const TabEducation = ({ dancerData }: { dancerData: DancerDetailResponseTypes }) => {
  const { educations } = dancerData;

  return (
    <section className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 8 })}>
      {educations?.length === 0 || educations?.every((exp) => exp === '') ? (
        <Head level="h5" tag="b1_sb" color="gray9" className={sprinkles({ display: 'flex', justifyContent: 'center' })}>
          아직 등록된 학력이 없어요
        </Head>
      ) : (
        educations?.map((edu, id) => {
          return (
            <div key={id}>
              <Text tag="b2_m" color="gray7">
                {edu}
              </Text>
            </div>
          );
        })
      )}
    </section>
  );
};

export default TabEducation;
