import {
  topImgStyle,
  gradientOverlayStyle,
  textWrapperStyle,
} from '@/pages/reservation/components/TopInfoContent/index.css';
import { TopInfoContentProps } from '@/pages/reservation/types';
import Flex from '@/components/Flex';
import Head from '@/components/Head';

const TopInfoContent = ({ name, teacherNickname, imageUrl }: TopInfoContentProps) => {
  return (
    <Flex width="100%" paddingTop="6rem">
      <div
        className={topImgStyle}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}>
        <div className={gradientOverlayStyle} />

        <Flex direction="column" gap="0.8rem" paddingTop="12.4rem" paddingLeft="2rem" className={textWrapperStyle}>
          <Head level="h3" tag="h4" color="white">
            {name}
          </Head>
          <Head level="h5" tag="h6" color="gray4">
            {teacherNickname}
          </Head>
        </Flex>
      </div>
    </Flex>
  );
};

export default TopInfoContent;
