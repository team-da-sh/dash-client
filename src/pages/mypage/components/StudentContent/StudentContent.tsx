import ClassProgress from '@/pages/mypage/components/ClassProgress/ClassProgress';
import MenuButton from '@/pages/mypage/components/MenuButton/MenuButton';
import * as styles from '@/pages/mypage/components/StudentContent/studentContent.css';
import { MENU_LIST } from '@/pages/mypage/constants/myPageList';
import Divider from '@/shared/components/Divider/Divider';
import InfoComponent from '@/shared/components/InfoComponent/InfoComponent';
import Text from '@/shared/components/Text/Text';
import { mockMyPageData } from '../TabWrapper/mockData';

const StudentContent = () => {
  const data = mockMyPageData;
  return (
    <div className={styles.containerStyle}>
      <div className={styles.topContainerStyle}>
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
      <div className={styles.menuButtonContainerStyle}>
        {MENU_LIST.map((item) => (
          <MenuButton key={item.path} {...item} />
        ))}
      </div>
      <Divider color="gray1" thickness="0.4rem" />
    </div>
  );
};

export default StudentContent;
