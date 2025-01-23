import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { ROUTES_CONFIG } from '@/routes/routesConfig';

const LoginHeader = () => {
  const navigate = useNavigate();

  const handleCloseClick = () => {
    navigate(ROUTES_CONFIG.home.path);
  };

  return (
    <Header.Root>
      <Header.BackIcon />
      <Header.CloseIcon onClick={handleCloseClick} />
    </Header.Root>
  );
};

export default LoginHeader;
