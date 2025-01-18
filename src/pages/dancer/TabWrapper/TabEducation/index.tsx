import Text from '@/components/Text';
import { DANCER_DATA } from '@/mocks/mockDancerData';

const TabExperience = () => {
  const { education } = DANCER_DATA;

  return (
    <div>
      {education.map((edu, index) => (
        <div key={index}>
          <Text tag="b2" color="gray7">
            {edu}
          </Text>
        </div>
      ))}
    </div>
  );
};

export default TabExperience;
