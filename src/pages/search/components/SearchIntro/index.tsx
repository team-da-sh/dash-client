import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Text from '@/components/Text';
import { IcSpeaker3D } from '@/assets/svg';

const SearchIntro = () => {
  return (
    <Flex align="center" gap="0.8rem">
      <IcSpeaker3D width={52} />
      <Flex direction="column" gap="0.4rem">
        <Text tag="b7" color="gray7">
          어떤 클래스를 들어야 할지 모르겠다면?
        </Text>
        <Flex>
          <Head tag="h6" color="main4">
            장르 or 댄서네임
          </Head>
          <Head tag="h6" color="black">
            을 검색해 보세요!
          </Head>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SearchIntro;
