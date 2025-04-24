import { ClearGif } from '@/shared/assets/gif';
import { clearStyle, flexCustomStyle } from '@/shared/components/Completion/completion.css';
import Flex from '@/shared/components/Flex/Flex';
import Head from '@/shared/components/Head/Head';
import Text from '@/shared/components/Text/Text';

interface CompletionProps {
  title: string;
  subTitle: string;
  description: string;
}

const Completion = ({ title, subTitle, description }: CompletionProps) => {
  return (
    <Flex direction="column" gap="0.8rem" className={flexCustomStyle}>
      <Flex direction="column">
        <Head level="h1" tag="h3_sb">
          {title}
        </Head>
        <Head level="h1" tag="h3_sb">
          {subTitle}
        </Head>
      </Flex>
      <Text tag="b2_m" color="gray7">
        {description}
      </Text>
      <img src={ClearGif} alt="완료 페이지 캐릭터" className={clearStyle} />
    </Flex>
  );
};

export default Completion;
