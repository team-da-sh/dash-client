import { flexCustomStyle } from '@/pages/instructorRegister/components/Description/description.css';
import Flex from '@/shared/components/Flex/Flex';
import Head from '@/shared/components/Head/Head';
import Text from '@/shared/components/Text/Text';

interface DescriptionProps {
  title: string;
  subTitle: string;
}

const Description = ({ title, subTitle }: DescriptionProps) => {
  return (
    <Flex direction="column" gap="0.8rem" className={flexCustomStyle}>
      <Head level="h1" tag="h3_sb">
        {title}
      </Head>
      <Text tag="b2_m" color="gray7">
        {subTitle}
      </Text>
    </Flex>
  );
};

export default Description;
