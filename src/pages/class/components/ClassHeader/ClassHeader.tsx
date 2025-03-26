import { useNavigate } from 'react-router-dom';
import {
  backIconStyle,
  classNameHeaderStyle,
  headerTextStyle,
} from '@/pages/class/components/ClassHeader/classHeader.css';
import { containerStyle } from '@/pages/home/components/HomeHeader/homeHeader.css';
import IcBack from '@/shared/assets/svg/IcBack';
import IcBackWhite24 from '@/shared/assets/svg/IcBackWhite24';
import Flex from '@/shared/components/Flex/Flex';
import Head from '@/shared/components/Head/Head';

interface ClassHeaderProps {
  isWhite: boolean;
  lessonName: string;
}

const ClassHeader = ({ isWhite, lessonName }: ClassHeaderProps) => {
  const navigate = useNavigate();

  return (
    <div className={containerStyle({ isWhite })}>
      <Flex align="center" className={backIconStyle} onClick={() => navigate(-1)}>
        {isWhite ? <IcBack width={'2.4rem'} /> : <IcBackWhite24 width={'2.4rem'} />}
      </Flex>

      <Flex align="center" justify="center" className={classNameHeaderStyle}>
        {isWhite && (
          <Head level="h5" tag="h6" className={headerTextStyle}>
            {lessonName}
          </Head>
        )}
      </Flex>
    </div>
  );
};

export default ClassHeader;
