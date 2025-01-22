import { useParams } from 'react-router-dom';
import ClassButtonWrapper from '@/pages/class/components/ClassButtonWrapper';
import ClassHeader from '@/pages/class/components/ClassHeader';
import ClassInfoWrapper from '@/pages/class/components/ClassInfoWrapper';
import TabWrapper from '@/pages/class/components/TabWrapper';
import { headerStyle } from '@/pages/class/index.css';
import Divider from '@/components/Divider';
import { useLessonDetail } from '@/apis/class/queries';
import { useIntersectCallback } from '@/utils/useIntersectCallback';

const Class = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>해당하는 클래스가 없습니다.</div>;
  }

  const { data, error } = useLessonDetail(id);
  const [targetRef, isVisible] = useIntersectCallback(false);

  console.log(isVisible);
  if (error instanceof Error) {
    return <div>오류: {error.message}</div>;
  }

  if (!data) {
    return <div>클래스 정보가 없습니다.</div>;
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
