'use client';

import { flexCustomStyle } from '@/app/my/(instructor)/manage-profile/components/Description/description.css';
import Head from '@/common/components/Head/Head';
import Text from '@/common/components/Text/Text';

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
      <Text tag="b3_m" color="gray6">
        {subTitle}
      </Text>
    </div>
  );
};

export default Description;
