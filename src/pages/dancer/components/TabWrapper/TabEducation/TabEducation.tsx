import {
  textStyle,
  sectionStyle,
  emptyMessageStyle,
} from '@/pages/dancer/components/TabWrapper/TabEducation/TabEducation.css';
import type { DancerDetailResponseTypes } from '@/pages/dancer/types/api';
import Head from '@/common/components/Head/Head';
import Text from '@/common/components/Text/Text';

const TabEducation = ({ dancerData }: { dancerData: DancerDetailResponseTypes }) => {
  const { educations } = dancerData;

  return (
    <section className={sectionStyle}>
      {educations?.length === 0 || educations?.every((exp) => exp === '') ? (
        <Head level="h5" tag="b1_sb" color="gray9" className={emptyMessageStyle}>
          아직 등록된 학력이 없어요
        </Head>
      ) : (
        educations?.map((edu, id) => {
          return (
            <div key={id}>
              <Text tag="b2_m" color="gray7" className={textStyle}>
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
