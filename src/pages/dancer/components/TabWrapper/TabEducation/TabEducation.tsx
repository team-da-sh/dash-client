import { emptyStyle } from '@/pages/dancer/components/TabWrapper/TabExperience/tabExperience.css';
import { DancerDetailResponse } from '@/pages/dancer/types/api';
import Flex from '@/shared/components/Flex/Flex';
import Head from '@/shared/components/Head/Head';
import Text from '@/shared/components/Text/Text';

interface TabEducationProps {
  dancerData: DancerDetailResponse;
}

const TabEducation = ({ dancerData }: TabEducationProps) => {
  const { educations } = dancerData;

  return (
    <Flex direction="column" gap="0.8rem">
      {educations?.length === 0 || educations?.every((exp) => exp === '') ? (
        <Head level="h5" tag="h6" color="gray9" className={emptyStyle}>
          아직 등록된 학력이 없어요
        </Head>
      ) : (
        educations?.map((edu, id) => {
          return (
            <div key={id}>
              <Text tag="b2" color="gray7">
                {edu}
              </Text>
            </div>
          );
        })
      )}
    </Flex>
  );
};

export default TabEducation;
