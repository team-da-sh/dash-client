import { containerStyle } from '@/pages/home/components/HomeHeader/index.css';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import { IcBack, IcBackWhite24 } from '@/assets/svg';
import { LESSON_DATA } from '@/mocks/mockLessonData';
import { backIconStyle, classNameHeaderStyle } from "./index.css";
import { useNavigate } from 'react-router-dom';

interface ClassHeaderProps {
  isVisible: boolean;
}

const ClassHeader = ({ isVisible }: ClassHeaderProps) => {
  const { lessonName } = LESSON_DATA;
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Navigate to the previous screen
  };

  return (
    <div className={containerStyle({ isVisible })}>
      <Flex align="center" className={backIconStyle} onClick={handleBackClick} style={{ cursor: 'pointer' }}>
        {isVisible ? <IcBack width={24} /> : <IcBackWhite24 width={24} />}
      </Flex>

      <Flex align="center" justify="center" className={classNameHeaderStyle}>
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
