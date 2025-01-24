import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as styles from '@/pages/home/components/BottomSection/index.css';
import { LIST_DATA } from '@/pages/mypage/constants/myPageList';
import Divider from '@/components/Divider';
import Flex from '@/components/Flex';
import { notify } from '@/components/Toast';
import { usePostLogout } from '@/apis/auth/quries';
import { IcArrowRightSmallGray0432, IcArrowRightSmallGray0732 } from '@/assets/svg';

const BottomSection = ({ isInstructor }: { isInstructor: boolean }) => {
  const { mutate: logout } = usePostLogout();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
  };

  const handleItemClick = (item: (typeof LIST_DATA)[number], isDisabled: boolean) => {
    if (isDisabled) return;

    if (item.inActive) {
      notify();
      return;
    }

    if (item.label === '로그아웃') {
      handleLogout();
    } else if (item.path) {
      navigate(item.path);
    }
  };

  // 리스트 아이템 렌더링
  const renderListItem = (item: (typeof LIST_DATA)[number]) => {
    const isDisabled = !!item.isInstructorRequired && !isInstructor;
    const ArrowIcon = isDisabled ? IcArrowRightSmallGray0432 : IcArrowRightSmallGray0732;

    return (
      <React.Fragment key={item.id}>
        <li
          className={`${styles.listStyle} ${isDisabled ? styles.disabledStyle : ''}`}
          onClick={() => handleItemClick(item, isDisabled)}>
          <p>{item.label}</p>
          <ArrowIcon width={32} height={32} />
        </li>
        {item.hasDivider && (
          <div className={styles.dividerStyle}>
            <Divider color="gray1" thickness={1} />
          </div>
        )}
      </React.Fragment>
    );
  };

  return (
    <Flex>
      <ul className={styles.ulStyle}>
        {LIST_DATA.map((item) => {
          const isDisabled =
            (item.isInstructorRequired && !isInstructor) || (item.label === '강사 등록' && isInstructor);
          const ArrowIcon = isDisabled ? IcArrowRightSmallGray0432 : IcArrowRightSmallGray0732;

          const handleClick = () => {
            if (isDisabled) return;
            if (item.label === '로그아웃') {
              handleLogout();
            } else if (item.path) {
              navigate(item.path);
            }
          };

          return (
            <React.Fragment key={item.id}>
              <li className={`${styles.listStyle} ${isDisabled ? styles.disabledStyle : ''}`} onClick={handleClick}>
                <p>{item.label}</p>
                <ArrowIcon width={32} height={32} />
              </li>
              {item.hasDivider && (
                <div className={styles.dividerStyle}>
                  <Divider color="gray1" thickness={1} />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </Flex>
  );
};

export default BottomSection;
