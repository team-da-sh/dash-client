import { useNavigate } from 'react-router-dom';
import Text from '@/shared/components/Text/Text';
import { notify } from '@/shared/components/Toast/Toast';
import { sprinkles } from '@/shared/styles/sprinkles.css';

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
    <div
      onClick={handleClick}
      className={sprinkles({ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 })}>
      <Icon width={36} height={36} />
      <Text tag="b2_m_long" color="gray10">
        {label}
      </Text>
    </div>
  );
};

export default MenuButton;
