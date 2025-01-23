import React from 'react';
import * as styles from '@/pages/home/components/BottomSection/index.css';
import { LIST_DATA } from '@/pages/mypage/constants/myPageList';
import Divider from '@/components/Divider';
import Flex from '@/components/Flex';
import { usePostLogout } from '@/apis/auth/quries';
import { IcArrowRightSmallGray0432, IcArrowRightSmallGray0732 } from '@/assets/svg';

const BottomSection = ({ isInstructor }: { isInstructor: boolean }) => {
  const { mutate: logout } = usePostLogout();

  const handleLogout = () => {
    logout();
  };

  return (
    <Flex>
      <ul className={styles.ulStyle}>
        {LIST_DATA.map((item) => {
          const isDisabled = item.isInstructorRequired && !isInstructor;
          const ArrowIcon = isDisabled ? IcArrowRightSmallGray0432 : IcArrowRightSmallGray0732;

          return (
            <React.Fragment key={item.id}>
              <li
                className={`${styles.listStyle} ${isDisabled ? styles.disabledStyle : ''}`}
                onClick={!isDisabled && item.label === '로그아웃' ? handleLogout : undefined}>
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
