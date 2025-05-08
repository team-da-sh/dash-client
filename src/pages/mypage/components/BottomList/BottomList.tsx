import { useNavigate } from 'react-router-dom';
import { usePostLogout } from '@/pages/auth/apis/queries';
import * as styles from '@/pages/mypage/components/BottomList/bottomList.css';
import { LIST_DATA } from '@/pages/mypage/constants/myPageList';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import IcArrowRightSmallGray0732 from '@/shared/assets/svg/IcArrowRightSmallGray0732';
import Divider from '@/shared/components/Divider/Divider';
import { notify } from '@/shared/components/Toast/Toast';
import { sprinkles } from '@/shared/styles/sprinkles.css';

const BottomList = () => {
  const navigate = useNavigate();
  const { mutate: logout } = usePostLogout();

  const handleItemClick = (item: (typeof LIST_DATA)[number]) => {
    if (item.inActive) return notify();
    if (item.label === '로그아웃') {
      logout();
      return navigate(ROUTES_CONFIG.home.path);
    }
  };

  return (
    <section className={sprinkles({ display: 'flex', flexDirection: 'column' })}>
      <ul className={styles.ulStyle}>
        {LIST_DATA.map((item) => (
          <div key={item.id}>
            <li className={styles.listStyle} onClick={() => handleItemClick(item)}>
              <p>{item.label}</p>
              <IcArrowRightSmallGray0732 width={32} height={32} />
            </li>
            {item.hasDivider && (
              <div className={styles.dividerStyle}>
                <Divider color="gray1" thickness={1} />
              </div>
            )}
          </div>
        ))}
      </ul>
    </section>
  );
};

export default BottomList;
