import Header from '@/components/Header';

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
