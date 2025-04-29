import InfoComponent from '@/shared/components/InfoComponent/InfoComponent';
import Text from '@/shared/components/Text/Text';
import { mockMyPageData } from '../TabWrapper/mockData';

const StudentContent = () => {
  const data = mockMyPageData;
  return (
    <div>
      <InfoComponent
        profileImageUrl={data.profileImageUrl}
        mainText={<Text tag="b1_sb">{data.nickname}</Text>}
        subContent={
          <Text tag="b3_m" color="gray6">
            {data.name} · {data.phoneNumber}
          </Text>
        }
      />
    </div>
  );
};

export default StudentContent;
