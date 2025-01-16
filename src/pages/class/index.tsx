import ClassHeader from '@/pages/class/ClassHeader';
import ClassInfoWrapper from '@/pages/class/ClassInfoWrapper';
import TabWrapper from '@/pages/class/TabWrapper';
import Divider from '@/components/Divider';
import { useIntersect } from '@/utils/useIntersect';
import { LESSON_DATA } from '@/mocks/mockLessonData';
import ClassButtonWrapper from './ClassButtonWrapper';
import { headerStyle } from './index.css';

const Class = () => {
  const [targetRef, isVisible] = useIntersect(false);
  const { lessonImageUrl } = LESSON_DATA;
  return (
    <>
      <div
        ref={targetRef}
        className={headerStyle}
        style={{
          backgroundImage: `url(${lessonImageUrl})`,
        }}></div>
      <ClassHeader isVisible={isVisible} />

      <ClassInfoWrapper />
      <Divider direction="horizontal" color="tertiary" length="100%" thickness="1.2rem" />
      <TabWrapper colorScheme="primary" />
      <ClassButtonWrapper />
    </>
  );
};

export default Class;
