import '@/pages/search/components/DancerList/index.css';
import { dancerImageStyle } from '@/pages/search/components/DancerList/index.css';
import Flex from '@/components/Flex';
import Head from '@/components/Head';

const DancerList = () => {
  return (
    <Flex align="center" padding="1.6rem 2rem">
      <img
        src="https://hankki-prod-bucket.s3.ap-northeast-2.amazonaws.com/dummy/%E1%84%80%E1%85%A9%E1%84%85%E1%85%A7%E1%84%83%E1%85%A2+%E1%84%86%E1%85%B5%E1%86%AF%E1%84%91%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A2%E1%86%AB%E1%84%87%E1%85%B5.jpeg"
        alt="Dancer"
        className={dancerImageStyle}
      />
      <Flex align="center" direction="column">
        <Head>BADALEE</Head>
        <Flex gap="0.5rem"></Flex>
      </Flex>
    </Flex>
  );
};

export default DancerList;
