import { useNavigate } from 'react-router-dom';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import BoxButton from '@/shared/components/BoxButton/BoxButton';

interface InfoEditButtonProps {
  id: string;
  startDateTime: string;
}

const InfoEditButton = ({ id, startDateTime }: InfoEditButtonProps) => {
  const navigate = useNavigate();

  const handleEditClick = () => {
    if (id) {
      navigate(ROUTES_CONFIG.classEdit.path(id));
    }
  };

  const isClassStarted = new Date() >= new Date(startDateTime) ? true : false;

  return (
    <BoxButton variant="primary" onClick={handleEditClick} disabled={isClassStarted}>
      수정하기
    </BoxButton>
  );
};

export default InfoEditButton;
