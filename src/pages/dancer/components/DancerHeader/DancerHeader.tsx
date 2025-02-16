import { useNavigate } from 'react-router-dom';
import { containerStyle } from '@/pages/home/components/HomeHeader/homeHeader.css';
import { IcBack, IcBackWhite24 } from '@/shared/assets/svg';
import Flex from '@/shared/components/Flex/Flex';

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
