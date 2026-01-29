import { useNavigate } from 'react-router-dom';
import { buttonStyle } from '@/pages/mypage/components/TabWrapper/components/StudentContent/components/MenuButton/menuButton.css';
import Text from '@/common/components/Text/Text';
import { notify } from '@/common/components/Toast/Toast';

interface MenuButtonPropTypes {
  path?: string;
  icon: React.ElementType;
  label: string;
  inActive?: boolean;
}
const MenuButton = ({ path, icon: Icon, label, inActive }: MenuButtonPropTypes) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (inActive) return notify({ message: '해당 기능은 추후 구현 예정이에요' });
    if (path) return navigate(path);
  };

  return (
    <div onClick={handleClick} className={buttonStyle}>
      <Icon width={36} height={36} />
      <Text tag="b2_m_long" color="gray10">
        {label}
      </Text>
    </div>
  );
};

export default MenuButton;
