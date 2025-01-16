import { containerStyle } from '@/pages/home/components/HomeHeader/index.css';
import Flex from '@/components/Flex';
import { IcBack, IcBackWhite24 } from '@/assets/svg';
import Head from '@/components/Head';
import { LESSON_DATA } from '@/mocks/mockLessonData';

interface ClassHeaderProps {
  isVisible: boolean;
}

const ClassHeader = ({ isVisible }: ClassHeaderProps) => {
  const { lessonName } = LESSON_DATA;

  return (
    <div className={containerStyle({ isVisible })}>
      <Flex
        style={{
          position: 'absolute',
          left: '2rem',
          top: '50%',
          transform: 'translateY(-50%)',
        }}
        align="center"
      >
        {isVisible ? <IcBack width={24} /> : <IcBackWhite24 width={24} />}
      </Flex>

      <Flex
        style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
        align="center"
        justify="center"
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
