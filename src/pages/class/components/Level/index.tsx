import Flex from '@/components/Flex';
import { IcClose } from '@/assets/svg';
import Card from '@/pages/class/components/Card';

const Level = () => {
  return (
    <>
      <Card>
        <IcClose width={'20px'} />

        <div>
          <p>입문자</p>
          <p>기본 동작과 리듬 익히기 중심의 단계를 말해요! </p>
        </div>
      </Card>
    </>
  );
};

export default Level;
