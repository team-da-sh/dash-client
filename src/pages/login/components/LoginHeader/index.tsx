import Header from '@/components/Header';

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
