import { useParams } from 'react-router-dom';
import { useGetLessonDetail } from '@/pages/class/apis/queries';
import { headerStyle } from '@/pages/class/class.css';
import ClassButtonWrapper from '@/pages/class/components/ClassButtonWrapper/ClassButtonWrapper';
import ClassInfoWrapper from '@/pages/class/components/ClassInfoWrapper/ClassInfoWrapper';
import TabWrapper from '@/pages/class/components/TabWrapper/TabWrapper';
import Error from '@/pages/error/Error';
import Divider from '@/shared/components/Divider/Divider';

const Class = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <Error />;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
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
        className={headerStyle}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}></div>

      <ClassInfoWrapper lessonData={data} />
      <Divider direction="horizontal" color="gray1" length="100%" thickness="1.2rem" />
      <TabWrapper colorScheme="primary" lessonData={data} />
      <ClassButtonWrapper lessonData={data} />
    </>
  );
};

export default Class;
