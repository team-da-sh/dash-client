import * as styles from '@/pages/mypage/BottomSection/index.css';
import Divider from '@/components/Divider';
import Flex from '@/components/Flex';
import Text from '@/components/Text';
import { IcArrowRightSmallGray0432, IcArrowRightSmallGray0732 } from '@/assets/svg';

// 클래스 등록 및 관리만 권한 필요
const listData = [
  { label: '내 정보 수정', id: 1 },
  { label: '강사 등록', id: 2 },
  { label: '클래스 등록', id: 3, isInstructorRequired: true },
  { label: '클래스 관리', id: 4, isInstructorRequired: true, hasDivider: true },
  { label: '자주 묻는 질문', id: 5 },
  { label: '고객 센터', id: 6, hasDivider: true },
  { label: '로그아웃', id: 7 },
];

const BottomSection = ({ isInstructor }: { isInstructor: boolean }) => {
  return (
    <Flex>
      <ul className={styles.ulStyle}>
        {listData.map((item) => {
          const isDisabled = item.isInstructorRequired && !isInstructor;

          return (
            <ul key={item.id}>
              <>
                <li className={styles.listStyle}>
                  <Text tag="b2" color={isDisabled ? 'gray4' : 'gray9'}>
                    {item.label}
                  </Text>
                  {isDisabled ? (
                    <IcArrowRightSmallGray0432 width={32} height={32} />
                  ) : (
                    <IcArrowRightSmallGray0732 width={32} height={32} />
                  )}
                </li>
                {/* Divider가 필요한 항목에 추가 */}
                {item.hasDivider && (
                  <li className={styles.dividerStyle}>
                    <Divider color="gray1" thickness={1} />
                  </li>
                )}
              </>
            </ul>
          );
        })}
      </ul>
    </Flex>
  );
};

export default BottomSection;
