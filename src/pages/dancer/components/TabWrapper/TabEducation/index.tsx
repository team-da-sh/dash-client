import { emptyStyle } from '@/pages/dancer/components/TabWrapper/TabExperience/index.css';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Text from '@/components/Text';
import { DANCER_DATA } from '@/pages/dancer/mocks/mockDancerData';

const TabExperience = () => {
  const { educations } = DANCER_DATA;

  return (
    <Flex direction="column" gap="0.8rem">
      {educations.length === 0 ? (
        <Head level="h5" tag="h6" color="gray9" className={emptyStyle}>
          아직 등록된 학력이 없어요
        </Head>
      ) : (
        educations.map((edu, id) => (
          <div key={id}>
            <Text tag="b2" color="gray7">
              {edu.education}
            </Text>
          </div>
        ))
      )}
    </Flex>
  );
};

export default TabExperience;
