import Divider from "@/components/Divider";
import ClassInfoWrapper from '@/pages/class/ClassInfoWrapper';
import TabWrapper from '@/pages/class/TabWrapper';

const Class = () => {
  return (
    <>
      <ClassInfoWrapper />
      <Divider direction='horizontal' color='tertiary' length='100%' thickness='1.2rem'/>
      <TabWrapper colorScheme="primary" />
    </>
  );
};

export default Class;
