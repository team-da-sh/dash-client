import * as styles from '@/pages/mypage/BottomSection/index.css';
import Divider from '@/components/Divider';
import Flex from '@/components/Flex';
import Text from '@/components/Text';
import { IcArrowRightSmallGray0432, IcArrowRightSmallGray0732 } from '@/assets/svg';

const BottomSection = () => {
  return (
    <Flex>
      <ul className={styles.ulStyle}>
        <li className={styles.listStyle}>
          <Text tag="b2" color="gray9">
            내 정보 수정
          </Text>
          <IcArrowRightSmallGray0732 width={32} height={32} />
        </li>
        <li className={styles.listStyle}>
          <Text tag="b2" color="gray9">
            강사 등록
          </Text>
          <IcArrowRightSmallGray0732 width={32} height={32} />
        </li>
        <li className={styles.listStyle}>
          <Text tag="b2" color="gray4">
            클래스 등록
          </Text>
          <IcArrowRightSmallGray0432 width={32} height={32} />
        </li>
        <li className={styles.listStyle}>
          <Text tag="b2" color="gray4">
            클래스 관리
          </Text>
          <IcArrowRightSmallGray0432 width={32} height={32} />
        </li>
        <li className={styles.dividerStyle}>
          <Divider color="gray1" thickness={1} />
        </li>
        <li className={styles.listStyle}>
          <Text tag="b2" color="gray9">
            자주 묻는 질문
          </Text>
          <IcArrowRightSmallGray0732 width={32} height={32} />
        </li>
        <li className={styles.listStyle}>
          <Text tag="b2" color="gray9">
            고객 센터
          </Text>
          <IcArrowRightSmallGray0732 width={32} height={32} />
        </li>
        <li className={styles.dividerStyle}>
          <Divider color="gray1" thickness={1} />
        </li>
        <li className={styles.listStyle}>
          <Text tag="b2" color="gray9">
            로그아웃
          </Text>
          <IcArrowRightSmallGray0732 width={32} height={32} />
        </li>
      </ul>
    </Flex>
  );
};

export default BottomSection;
