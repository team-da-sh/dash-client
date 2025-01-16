import { progressBarStyle } from '@/pages/login/index.css';
import Header from '@/components/Header';
import ProgressBar from '@/components/ProgressBar';

interface LoginHeaderProps {
  currentStep: number;
}

const LoginHeader = ({ currentStep }: LoginHeaderProps) => {
  return (
    <Header.Root>
      {currentStep < 5 && <Header.BackIcon />}
      <Header.CloseIcon onClick={() => {}} />
    </Header.Root>
  );
};

export default LoginHeader;
