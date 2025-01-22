import { flexCustomStyle } from '@/pages/instructorRegister/components/Description/index.css';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Text from '@/components/Text';

interface DescriptionProps {
  title: string;
  subTitle: string;
}

const Description = ({ title, subTitle }: DescriptionProps) => {
  return (
    <Flex direction="column" gap="0.8rem" className={flexCustomStyle}>
      <Head level="h1" tag="h2">
        {title}
      </Head>
      <Text tag="b2" color="gray7">
        {subTitle}
      </Text>
    </Flex>
  );
};

export default Description;
