import Flex from '@/components/Flex';
import Head from '@/components/Head';
import { LoadingGif } from '@/assets/gif';

const Loading = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      paddingTop="19.5rem"
      paddingRight="11.7rem"
      paddingBottom="27.3rem"
      paddingLeft="11.8rem">
      <Flex direction="column" align="center" justify="center" gap="1.3rem">
        <img src={LoadingGif} width={300} />
        <Head tag="h5">로딩 중...</Head>
      </Flex>
    </Flex>
  );
};

export default Loading;
