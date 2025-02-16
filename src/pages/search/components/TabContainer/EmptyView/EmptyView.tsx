import { EmptyGif } from '@/shared/assets/gif';
import Flex from '@/shared/components/Flex/Flex';
import Head from '@/shared/components/Head/Head';

const EmptyView = () => {
  return (
    <Flex width="100%" justify="center" direction="column" align="center" gap="2.4rem" marginTop="6rem">
      <img src={EmptyGif} width={300} />
      <Flex direction="column" justify="center" align="center">
        <Head tag="h5">검색 결과가 없어요.</Head>
        <Head tag="h5">다른단어로 검색해 보시겠어요?</Head>
      </Flex>
    </Flex>
  );
};

export default EmptyView;
