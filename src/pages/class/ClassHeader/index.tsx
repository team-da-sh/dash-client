import { containerStyle } from '@/pages/home/components/HomeHeader/index.css';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import { IcBack, IcBackWhite24 } from '@/assets/svg';
import { LESSON_DATA } from '@/mocks/mockLessonData';
import { backIconStyle, classNameHeaderStyle } from "./index.css";

interface ClassHeaderProps {
  isVisible: boolean;
}

const ClassHeader = ({ isVisible }: ClassHeaderProps) => {
  const { lessonName } = LESSON_DATA;

  return (
    <div className={containerStyle({ isVisible })}>
      <Flex align="center" className={backIconStyle}>
        {isVisible ? <IcBack width={24} /> : <IcBackWhite24 width={24} />}
      </Flex>

      <Flex
        align="center"
        justify="center"
        className={classNameHeaderStyle}
        >
        {isVisible && (
          <Head level="h5" tag="h6">
            {lessonName}
          </Head>
        )}
      </Flex>
    </div>
  );
};

export default ClassHeader;
