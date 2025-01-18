import Header from '@/components/Header';

interface LoginHeaderProps {
  currentStep: number;
  onPrevButtonClick: () => void;
}

const LoginHeader = ({ currentStep, onPrevButtonClick }: LoginHeaderProps) => {
  return (
    <Header.Root>
      {currentStep < 5 && <Header.BackIcon onClick={onPrevButtonClick} />}
      <Header.CloseIcon onClick={() => {}} />
    </Header.Root>
  );
};

export default LoginHeader;
