import { useNavigate } from 'react-router-dom';
import Text from '@/shared/components/Text/Text';
import { sprinkles } from '@/shared/styles/sprinkles.css';

interface MenuButtonPropTypes {
  path: string;
  icon: React.ElementType;
  label: string;
}
const MenuButton = ({ path, icon: Icon, label }: MenuButtonPropTypes) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
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
