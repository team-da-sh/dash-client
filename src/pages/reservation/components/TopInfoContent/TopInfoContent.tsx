import {
  gradientOverlayStyle,
  textWrapperStyle,
  topImgStyle,
} from '@/pages/reservation/components/TopInfoContent/topInfoContent.css';
import Flex from '@/shared/components/Flex/Flex';
import Head from '@/shared/components/Head/Head';
import type { ReservationDetailResponseTypes } from "@/pages/reservation/types/api";

const TopInfoContent = ({ name, teacherNickname, imageUrl }: ReservationDetailResponseTypes) => {
  return (
    <Flex width="100%" paddingTop="6rem">
      <div
        className={topImgStyle}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}>
        <div className={gradientOverlayStyle} />

        <Flex className={textWrapperStyle}>
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
