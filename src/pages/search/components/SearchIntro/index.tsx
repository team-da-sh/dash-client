import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Text from '@/components/Text';
import { IcSpeaker3D } from '@/assets/svg';

const SearchIntro = () => {
  return (
    <Flex align="center">
      <IcSpeaker3D width={52} />
      <Flex direction="column">
        <Text tag="b7" color="gray7">
          원하는 수업뿐만 아니라 원하는 댄서 정보를 얻고 싶다면?
        </Text>
        <Flex>
          <Head tag="h6" color="main4">
            ‘장르’나 ‘댄서 네임’
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
