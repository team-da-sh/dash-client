import * as styles from '@/pages/mypage/TopSection/index.css';
import Divider from '@/components/Divider';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Tag from '@/components/Tag';
import Text from '@/components/Text';
import { IcClose, IcArrowRightGray0614, IcCalendarcheckColor3D24, IcCalendarcheckMono3D24 } from '@/assets/svg';

const TopSection = () => {
  return (
    <section className={styles.sectionStyle}>
      <Flex direction="column" align="center">
        <Flex align="center" width="100%" justify="spaceBetween">
          <IcClose width={24} height={24} />
          <Flex align="center" gap="0.2rem">
            <Text tag="b7" color="gray7">
              프로필 수정
            </Text>
            <IcArrowRightGray0614 width={14} height={14} />
          </Flex>
        </Flex>
        <div className={styles.imageStyle}></div>
        <Head level="h1" tag="h2">
          BADALEE
        </Head>
        <Flex marginTop="1.2rem" gap="0.8rem">
          <Tag hasAuth={true} size="mypage">
            <IcCalendarcheckColor3D24 width={24} height={24} />
            클래스 신청 가능
          </Tag>
          <Tag hasAuth={false} size="mypage">
            <IcCalendarcheckMono3D24 width={24} height={24} />
            클래스 개설 불가
          </Tag>
        </Flex>
      </Flex>
      <Flex paddingTop="2.4rem" paddingLeft="3.2rem" paddingRight="3.2rem" gap="2.1rem">
        <Flex align="center">
          <Flex direction="column" align="center">
            <Head tag="h4" color="gray4">
              0
            </Head>
            <Text tag="b6" color="gray4">
              신청내역
            </Text>
          </Flex>
        </Flex>
        <Divider direction="vertical" color="gray2" length={32} thickness={1} />
        <Flex direction="column" align="center">
          <Head tag="h4" color="gray4">
            0
          </Head>
          <Text tag="b6" color="gray4">
            관심목록
          </Text>
        </Flex>
        <Divider direction="vertical" color="gray2" length={32} thickness={1} />
        <Flex direction="column" align="center">
          <Head tag="h4" color="gray4">
            0
          </Head>
          <Text tag="b6" color="gray4">
            내 클래스
          </Text>
        </Flex>
      </Flex>
    </section>
  );
};

export default TopSection;
