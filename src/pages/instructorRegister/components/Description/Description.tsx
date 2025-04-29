import { flexCustomStyle } from '@/pages/instructorRegister/components/Description/description.css';
import Head from '@/shared/components/Head/Head';
import Text from '@/shared/components/Text/Text';

interface DescriptionProps {
  title: string;
  subTitle?: string;
}

const Description = ({ title, subTitle }: DescriptionProps) => {
  return (
    <div className={flexCustomStyle}>
      <Head level="h1" tag="h6_sb">
        {title}
      </Head>
      <Text tag="b3_m" color="gray7">
        {subTitle}
      </Text>
    </div>
  );
};

export default Description;
