import { emptyStyle } from '@/pages/dancer/TabWrapper/TabExperience/index.css';
import Text from '@/components/Text';
import { DANCER_DATA } from '@/mocks/mockDancerData';

const TabExperience = () => {
  const { education } = DANCER_DATA;

  return (
    <div>
      {education.length === 0 ? (
        <Text tag="b6" color="gray9" className={emptyStyle}>
          아직 등록된 경력이 없어요
        </Text>
      ) : (
        education.map((edu, index) => (
          <div key={index}>
            <Text tag="b2" color="gray7">
              {edu}
            </Text>
          </div>
        ))
      )}
    </div>
  );
};

export default TabExperience;
