import { flexCustomStyle } from '@/pages/instructorRegister/components/Description/index.css';
import Flex from '@/shared/components/Flex';
import Head from '@/shared/components/Head';
import Text from '@/shared/components/Text';

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
