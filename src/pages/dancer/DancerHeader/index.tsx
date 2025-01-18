import { useNavigate } from 'react-router-dom';
import { containerStyle } from '@/pages/home/components/HomeHeader/index.css';
import Flex from '@/components/Flex';
import { IcBack, IcBackWhite24, IcCloseBlack24, IcCloseWhite24 } from '@/assets/svg';

interface ClassHeaderProps {
  isVisible: boolean;
}

const DancerHeader = ({ isVisible }: ClassHeaderProps) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className={containerStyle({ isVisible })}>
      <Flex align="center" justify="center" onClick={handleBackClick}>
        {isVisible ? <IcBack width={'2.4rem'} /> : <IcBackWhite24 width={'2.4rem'} />}
      </Flex>

      <Flex align="center" justify="center">
        {isVisible ? <IcCloseBlack24 width={'2.4rem'} /> : <IcCloseWhite24 width={'2.4rem'} />}
      </Flex>
    </div>
  );
};

export default DancerHeader;
