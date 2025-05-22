import { useGetMyPage } from '@/pages/mypage/apis/queries';
import BottomList from '@/pages/mypage/components/BottomList/BottomList';
import ClassProgress from '@/pages/mypage/components/TabWrapper/components/StudentContent/components/ClassProgress/ClassProgress';
import MenuButton from '@/pages/mypage/components/TabWrapper/components/StudentContent/components/MenuButton/MenuButton';
import * as styles from '@/pages/mypage/components/TabWrapper/components/StudentContent/studentContent.css';
import { MENU_LIST } from '@/pages/mypage/constants/myPageList';
import Divider from '@/shared/components/Divider/Divider';
import InfoComponent from '@/shared/components/InfoComponent/InfoComponent';
import Text from '@/shared/components/Text/Text';
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
          mainText={<Text tag="b1_sb">{data.nickname}</Text>}
          subContent={
            <Text tag="b3_r" color="gray6">
              {data.name} · {formatPhoneNumberNoSpace(data.phoneNumber)}
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
      <BottomList />
    </div>
  );
};

export default StudentContent;
