import { emptyStyle } from '@/pages/dancer/components/TabWrapper/TabExperience/index.css';
import { DancerDetailApiResponse } from '@/pages/dancer/types';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Text from '@/components/Text';

interface TabEducationProps {
  dancerData: DancerDetailApiResponse;
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
