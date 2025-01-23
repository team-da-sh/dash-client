import { clearStyle, flexCustomStyle } from '@/components/Completion/index.css';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Text from '@/components/Text';
import { ClearGif } from '@/assets/gif';

interface CompletionProps {
  title: string;
  subTitle: string;
  description: string;
}

const Completion = ({ title, subTitle, description }: CompletionProps) => {
  return (
    <Flex direction="column" gap="0.8rem" className={flexCustomStyle}>
      <Flex direction="column">
        <Head level="h1" tag="h2">
          {title}
        </Head>
        <Head level="h1" tag="h2">
          {subTitle}
        </Head>
      </Flex>
      <Text tag="b2" color="gray7">
        {description}
      </Text>
      <img src={ClearGif} alt="완료 페이지 캐릭터" className={clearStyle} />
    </Flex>
  );
};

export default Completion;
