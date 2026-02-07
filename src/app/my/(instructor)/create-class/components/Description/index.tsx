import {
  descriptionHeaderRowStyle,
  descriptionWrapperStyle,
  essentialTextStyle,
} from '@/app/my/(instructor)/create-class/components/Description/index.css';
import Head from '@/common/components/Head/Head';
import Text from '@/common/components/Text/Text';

interface DescriptionProps {
  title: string;
  subTitle: string;
}

const Description = ({ title, subTitle }: DescriptionProps) => {
  return (
    <div className={descriptionWrapperStyle}>
      <div className={descriptionHeaderRowStyle}>
        <Head level="h2" tag="h5_sb">
          {title}
        </Head>
        <Text tag="c1_m" color="main4" className={essentialTextStyle}>
          *필수
        </Text>
      </div>
      <Text tag="b2_m" color="gray7">
        {subTitle}
      </Text>
    </div>
  );
};

export default Description;
