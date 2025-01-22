import * as styles from '@/pages/home/components/BottomSection/index.css';
import { LIST_DATA } from '@/pages/mypage/constants/myPageList';
import Divider from '@/components/Divider';
import Flex from '@/components/Flex';
import { IcArrowRightSmallGray0432, IcArrowRightSmallGray0732 } from '@/assets/svg';

const BottomSection = ({ isInstructor }: { isInstructor: boolean }) => {
  return (
    <Flex>
      <ul className={styles.ulStyle}>
        {LIST_DATA.map((item) => {
          const isDisabled = item.isInstructorRequired && !isInstructor;

          // disabled 시 아이콘 조건 설정
          const ArrowIcon = isDisabled ? IcArrowRightSmallGray0432 : IcArrowRightSmallGray0732;

          return (
            <>
              <li key={item.id} className={`${styles.listStyle} ${isDisabled ? styles.disabledStyle : ''}`}>
                <p>{item.label}</p>
                <ArrowIcon width={32} height={32} />
              </li>
              {/* Divider가 필요한 항목에 추가 */}
              {item.hasDivider && (
                <div className={styles.dividerStyle}>
                  <Divider color="gray1" thickness={1} />
                </div>
              )}
            </>
          );
        })}
      </ul>
    </Flex>
  );
};

export default BottomSection;
