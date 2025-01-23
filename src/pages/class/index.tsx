import { useParams } from 'react-router-dom';
import ClassButtonWrapper from '@/pages/class/components/ClassButtonWrapper';
import ClassHeader from '@/pages/class/components/ClassHeader';
import ClassInfoWrapper from '@/pages/class/components/ClassInfoWrapper';
import TabWrapper from '@/pages/class/components/TabWrapper';
import { headerStyle } from '@/pages/class/index.css';
import Error from '@/pages/error';
import Divider from '@/components/Divider';
import { useGetLessonDetail } from '@/apis/class/queries';
import { useIntersectCallback } from '@/utils/useIntersectCallback';

const Class = () => {
  const { id } = useParams<{ id: string }>();
  const [targetRef, isVisible] = useIntersectCallback(false);

  if (!id) {
    return <Error />;
  }

  const { data, isError, isLoading } = useGetLessonDetail(id);

  if (isLoading) {
    return <></>;
  }

  if (isError || !data) {
    return <Error />;
  }


  const imageUrl = data.imageUrl;

  return (
    <>
      <div
        ref={targetRef}
        className={headerStyle}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}>
        <ClassHeader isVisible={isVisible} lessonName={data.name} />
      </div>

      <ClassInfoWrapper lessonData={data} />
      <Divider direction="horizontal" color="gray1" length="100%" thickness="1.2rem" />
      <TabWrapper colorScheme="primary" lessonData={data} />
      <ClassButtonWrapper lessonData={data} />
    </>
  );
};

export default Class;
