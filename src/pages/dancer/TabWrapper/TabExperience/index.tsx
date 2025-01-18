import { emptyStyle } from '@/pages/dancer/TabWrapper/TabExperience/index.css';
import Flex from '@/components/Flex';
import Text from '@/components/Text';
import { DANCER_DATA } from '@/mocks/mockDancerData';

const TabExperience = () => {
  const { experience } = DANCER_DATA;

  return (
    <Flex direction="column" gap="0.8rem">
      {experience.length === 0 ? (
        <Text tag="b6" color="gray9" className={emptyStyle}>
          아직 등록된 경력이 없어요
        </Text>
      ) : (
        experience.map((exp, index) => (
          <div key={index}>
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
