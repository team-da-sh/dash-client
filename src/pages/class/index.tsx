import ClassInfoWrapper from '@/pages/class/ClassInfoWrapper';
import TabWrapper from '@/pages/class/TabWrapper';
import Divider from '@/components/Divider';

const Class = () => {
  return (
    <>
      <ClassInfoWrapper />
      <Divider direction="horizontal" color="gray1" length="100%" thickness="1.2rem" />
      <TabWrapper colorScheme="primary" />
    </>
  );
};

export default Class;
