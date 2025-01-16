import { progressBarStyle } from '@/pages/login/index.css';
import Header from '@/components/Header';
import ProgressBar from '@/components/ProgressBar';

interface LoginHeaderProps {}

const LoginHeader = ({}: LoginHeaderProps) => {
  return (
    <Header.Root>
      <Header.BackIcon />
      <Header.CloseIcon onClick={() => {}} />
    </Header.Root>
  );
};

export default LoginHeader;
