import { useNavigate } from 'react-router-dom';
import { containerStyle } from '@/pages/home/components/HomeHeader/index.css';
import Flex from '@/components/Flex';
import { IcBack, IcBackWhite24 } from '@/assets/svg';

interface DancerHeaderProps {
  isVisible: boolean;
}

const DancerHeader = ({ isVisible }: DancerHeaderProps) => {
  const navigate = useNavigate();

  return (
    <div className={containerStyle({ isVisible })}>
      <Flex align="center" justify="center" onClick={() => navigate(-1)}>
        {isVisible ? <IcBack width={'2.4rem'} /> : <IcBackWhite24 width={'2.4rem'} />}
      </Flex>
    </div>
  );
};

export default DancerHeader;
