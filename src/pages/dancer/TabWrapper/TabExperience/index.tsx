import Text from '@/components/Text';
import { DANCER_DATA } from '@/mocks/mockDancerData';

const TabExperience = () => {
  const { experience } = DANCER_DATA;

  return (
    <div>
      {experience.map((exp, index) => (
        <div key={index}>
          <Text tag="b2" color="gray7">
            {exp}
          </Text>
        </div>
      ))}
    </div>
  );
};

export default TabExperience;
