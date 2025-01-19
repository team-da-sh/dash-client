import { emptyStyle } from '@/pages/dancer/TabWrapper/TabExperience/index.css';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Text from '@/components/Text';
import { DANCER_DATA } from '@/mocks/mockDancerData';

const TabExperience = () => {
  const { experiences } = DANCER_DATA;

  return (
    <Flex direction="column" gap="0.8rem">
      {experiences.length === 0 ? (
        <Head level="h5" tag="h6" color="gray9" className={emptyStyle}>
          아직 등록된 경력이 없어요
        </Head>
      ) : (
        experiences.map((exp, id) => (
          <div key={id}>
            <Text tag="b2" color="gray7">
              {exp.experience}
            </Text>
          </div>
        ))
      )}
    </Flex>
  );
};

export default TabExperience;
