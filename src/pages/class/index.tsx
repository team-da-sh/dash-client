import ClassButtonWrapper from '@/pages/class/components/ClassButtonWrapper';
import ClassHeader from '@/pages/class/components/ClassHeader';
import ClassInfoWrapper from '@/pages/class/components/ClassInfoWrapper';
import TabWrapper from '@/pages/class/components/TabWrapper';
import { headerStyle } from '@/pages/class/index.css';
import Divider from '@/components/Divider';
import { useIntersect } from '@/utils/useIntersect';
import { LESSON_DATA } from '@/pages/class/mocks/mockLessonData';

const Class = () => {
  const [targetRef, isVisible] = useIntersect(false);
  const { imageUrl } = LESSON_DATA;
  return (
    <>
      <div
        ref={targetRef}
        className={headerStyle}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <ClassHeader isVisible={isVisible} />

      <ClassInfoWrapper />
      <Divider direction="horizontal" color="gray1" length="100%" thickness="1.2rem" />
      <TabWrapper colorScheme="primary" />
      <ClassButtonWrapper />
    </>
  );
};

export default Class;
