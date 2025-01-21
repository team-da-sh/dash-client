import { useParams } from 'react-router-dom';
import ClassButtonWrapper from '@/pages/class/components/ClassButtonWrapper';
import ClassHeader from '@/pages/class/components/ClassHeader';
import ClassInfoWrapper from '@/pages/class/components/ClassInfoWrapper';
import TabWrapper from '@/pages/class/components/TabWrapper';
import { headerStyle } from '@/pages/class/index.css';
import Divider from '@/components/Divider';
//import { LESSON_DATA } from '@/pages/class/mocks/mockLessonData';
import { useLessonDetail } from '@/apis/class/quries';
import { useIntersect } from '@/utils/useIntersect';

const Class = () => {
  const [targetRef, isVisible] = useIntersect(false);
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>Error: lessonId is missing</div>;
  }

  const { data, error, isLoading } = useLessonDetail(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error instanceof Error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>No lesson data available</div>;
  }

  const imageUrl = data.imageUrl;

  return (
    <>
      <div
        ref={targetRef}
        className={headerStyle}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <ClassHeader isVisible={isVisible} lessonData={data}/>

      <ClassInfoWrapper lessonData={data} />
      <Divider direction="horizontal" color="gray1" length="100%" thickness="1.2rem" />
      <TabWrapper colorScheme="primary" lessonData={data} />
      <ClassButtonWrapper lessonData={data} />
    </>
  );
};

export default Class;
