import {
  textStyle,
  sectionStyle,
  emptyMessageStyle,
} from '@/pages/dancer/components/TabWrapper/TabExperience/TabExperience.css';
import type { DancerDetailResponseTypes } from '@/pages/dancer/types/api';
import Head from '@/common/components/Head/Head';
import Text from '@/common/components/Text/Text';

const TabExperience = ({ dancerData }: { dancerData: DancerDetailResponseTypes }) => {
  const { experiences } = dancerData;

  return (
    <section className={sectionStyle}>
      {experiences?.length === 0 || experiences?.every((exp) => exp === '') ? (
        <Head level="h5" tag="b1_sb" color="gray9" className={emptyMessageStyle}>
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
