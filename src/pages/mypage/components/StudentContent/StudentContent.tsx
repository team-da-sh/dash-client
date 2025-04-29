import ClassProgress from '@/pages/mypage/components/ClassProgress/ClassProgress';
import * as styles from '@/pages/mypage/components/StudentContent/studentContent.css';
import InfoComponent from '@/shared/components/InfoComponent/InfoComponent';
import Text from '@/shared/components/Text/Text';
import { mockMyPageData } from '../TabWrapper/mockData';

const StudentContent = () => {
  const data = mockMyPageData;
  return (
    <div className={styles.containerStyle}>
      <InfoComponent
        profileImageUrl={data.profileImageUrl}
        mainText={<Text tag="b1_sb">{data.nickname}</Text>}
        subContent={
          <Text tag="b3_m" color="gray6">
            {data.name} · {data.phoneNumber}
          </Text>
        }
      />
      <ClassProgress />
    </div>
  );
};

export default StudentContent;
