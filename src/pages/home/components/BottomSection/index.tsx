import * as styles from '@/pages/home/components/BottomSection/index.css';
import { LIST_DATA } from '@/pages/mypage/constants/myPageList';
import Divider from '@/components/Divider';
import Flex from '@/components/Flex';
import Text from '@/components/Text';
import { IcArrowRightSmallGray0432, IcArrowRightSmallGray0732 } from '@/assets/svg';
import { MyPageProps } from '@/types/myPageTypes';

const BottomSection = ({ userData }: { userData: MyPageProps }) => {
  // 강사 권한을 가질 때는 null 이 아닌 number가 옴
  const isInstructor = userData.lessonCount !== null;

  return (
    <Flex>
      <ul className={styles.ulStyle}>
        {LIST_DATA.map((item) => {
          const isDisabled = item.isInstructorRequired && !isInstructor;

          // disabled 시 아이콘 조건 설정
          const ArrowIcon = isDisabled ? IcArrowRightSmallGray0432 : IcArrowRightSmallGray0732;

          return (
            <>
              <li key={item.id} className={styles.listStyle}>
                <Text tag="b2" color={isDisabled ? 'gray4' : 'gray9'}>
                  {item.label}
                </Text>
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
