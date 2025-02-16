import { emptyStyle } from '@/pages/dancer/components/TabWrapper/TabExperience/index.css';
import { DancerDetailResponse } from '@/pages/dancer/types/api';
import Flex from '@/shared/components/Flex';
import Head from '@/shared/components/Head';
import Text from '@/shared/components/Text';

interface TabExperienceProps {
  dancerData: DancerDetailResponse;
}

const TabExperience = ({ dancerData }: TabExperienceProps) => {
  const { experiences } = dancerData;

  return (
    <Flex direction="column" gap="0.8rem">
      {experiences?.length === 0 || experiences?.every((exp) => exp === '') ? (
        <Head level="h5" tag="h6" color="gray9" className={emptyStyle}>
          아직 등록된 경력이 없어요
        </Head>
      ) : (
        experiences?.map((exp, id) => (
          <div key={id}>
            <Text tag="b2" color="gray7">
              {exp}
            </Text>
          </div>
        ))
      )}
    </Flex>
  );
};

export default TabExperience;
