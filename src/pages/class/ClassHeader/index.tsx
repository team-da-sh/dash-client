import { useNavigate } from 'react-router-dom';
import { backIconStyle, classNameHeaderStyle } from '@/pages/class/ClassHeader/index.css';
import { containerStyle } from '@/pages/home/components/HomeHeader/index.css';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import { IcBack, IcBackWhite24 } from '@/assets/svg';
import { LESSON_DATA } from '@/pages/class/mocks/mockLessonData';

interface ClassHeaderProps {
  isVisible: boolean;
}

const ClassHeader = ({ isVisible }: ClassHeaderProps) => {
  const { name } = LESSON_DATA;
  
  const navigate = useNavigate();

  return (
    <div className={containerStyle({ isVisible })}>
      <Flex align="center" className={backIconStyle} onClick={() => navigate(-1)}>
        {isVisible ? <IcBack width={'2.4rem'} /> : <IcBackWhite24 width={'2.4rem'} />}
      </Flex>

      <Flex align="center" justify="center" className={classNameHeaderStyle}>
        {isVisible && (
          <Head level="h5" tag="h6">
            {name}
          </Head>
        )}
      </Flex>
    </div>
  );
};

export default ClassHeader;
