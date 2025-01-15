import { cardStyle } from '@/pages/class/ClassInfoWrapper/index.css';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Tag from '@/components/Tag';
import Text from '@/components/Text';
import { IcClose } from '@/assets/svg';
import { vars } from '@/styles/theme.css';

const ClassInfoWrapper = () => {
  return (
    <>
      <div style={{ height: '37.5rem', backgroundColor: vars.colors.gray02 }}></div>

      <Flex direction="column" padding="2rem 2rem 2.4rem 2rem">
        <Flex gap="0.4rem" marginBottom="1.2rem">
          <Tag type="genre" size="medium">
            <Text tag="b7" color="white">
              힙합
            </Text>
          </Tag>
          <Tag type="deadline" size="medium">
            <Text tag="b7" color="white">
              D-3
            </Text>
          </Tag>
        </Flex>

        <Head level="h2" tag="h4" style={{ marginBottom: '1.6rem' }}>
          힙합의 멋, 올드스쿨 힙합 기본기 정복하기
        </Head>

        <Flex align="center" gap="0.8rem">
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: vars.colors.gray01,
            }}
          ></div>
          <Text tag="b2" color="gray9">
            김태훈
          </Text>
        </Flex>

        <Flex justify="flexEnd" width="100%" align="center" gap="0.8rem" marginBottom="1.5rem">
          <span style={{ color: vars.colors.gray06 }}>
            <Head tag="h5">6회</Head>
          </span>
          <Head level="h5" tag="h2">
            350,000 원
          </Head>
        </Flex>

        <div className={cardStyle}>
          <IcClose width={24} />
          <Text tag="b2" color="black">
            마감까지
          </Text>
          <Text tag="b2" color="main4">
            13
          </Text>
          <Text tag="b2" color="black">
            명 남았어요!
          </Text>
        </div>
      </Flex>
    </>
  );
};

export default ClassInfoWrapper;
