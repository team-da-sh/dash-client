import { useNavigate } from 'react-router-dom';
import { usePostLogout } from '@/pages/auth/apis/queries';
import * as styles from '@/pages/mypage/components/BottomList/bottomList.css';
import { getBottomListData } from '@/pages/mypage/utils/getBottomList';
import IcArrowRightSmallGray0732 from '@/shared/assets/svg/IcArrowRightSmallGray0732';
import Divider from '@/shared/components/Divider/Divider';
import { sprinkles } from '@/shared/styles/sprinkles.css';

interface BottomListPropTypes {
  userRole: 'STUDENT' | 'TEACHER';
}

const BottomList = ({ userRole }: BottomListPropTypes) => {
  const navigate = useNavigate();
  const { mutate: logout } = usePostLogout();
  const LIST_DATA = getBottomListData(navigate, logout, userRole);

  return (
    <section className={sprinkles({ display: 'flex', flexDirection: 'column' })}>
      <ul className={styles.ulStyle}>
        {LIST_DATA.map((item) => (
          <div key={item.id}>
            <li className={styles.listStyle} onClick={item.onClick}>
              <p>{item.label}</p>
              <IcArrowRightSmallGray0732 width={32} height={32} />
            </li>
            {item.hasDivider && (
              <div className={styles.dividerStyle}>
                <Divider color="gray2" thickness="0.1rem" />
              </div>
            )}
          </div>
        ))}
      </ul>
    </section>
  );
};

export default BottomList;
