'use client';

import { useGetMyPage } from '@/app/mypage/apis/queries';
import BottomList from '@/app/mypage/components/BottomList/BottomList';
import ClassProgress from '@/app/mypage/components/StudentContent/components/ClassProgress/ClassProgress';
import MenuButton from '@/app/mypage/components/StudentContent/components/MenuButton/MenuButton';
import * as styles from '@/app/mypage/components/StudentContent/studentContent.css';
import { MENU_LIST } from '@/app/mypage/constants/myPageList';
import Divider from '@/common/components/Divider/Divider';
import Text from '@/common/components/Text/Text';
import InfoComponent from '@/shared/components/InfoComponent/InfoComponent';
import { formatPhoneNumberNoSpace } from '@/shared/utils/formatPhoneNumber';

const StudentContent = () => {
  const { data, isLoading } = useGetMyPage();

  if (isLoading || !data) {
    return <></>;
  }

  return (
    <div className={styles.containerStyle}>
      <div className={styles.topContainerStyle}>
        <InfoComponent
          type="student"
          profileImageUrl={data.profileImageUrl}
          mainText={<Text tag="b1_sb">{data.name}</Text>}
          subContent={
            <Text tag="b3_r" color="gray6" className={styles.noUnderlineStyle}>
              {formatPhoneNumberNoSpace(data.phoneNumber)}
            </Text>
          }
        />
        <ClassProgress />
      </div>
      <div className={styles.menuButtonContainerStyle}>
        {MENU_LIST.map((menu) => (
          <MenuButton key={menu.label} path={menu.path} icon={menu.icon} label={menu.label} inActive={menu.inActive} />
        ))}
      </div>
      <Divider color="gray1" thickness="0.4rem" />
      <BottomList userRole="STUDENT" />
    </div>
  );
};

export default StudentContent;
