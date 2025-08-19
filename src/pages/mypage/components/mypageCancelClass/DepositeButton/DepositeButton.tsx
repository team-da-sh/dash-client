import * as styles from '@/pages/mypage/components/mypageCancelClass/DepositeButton/depositeButton.css';
import Text from '@/shared/components/Text/Text';

interface DepositeButtonProps {
  text: string;
  isSelected: boolean;
  onClick: () => void;
}

const DepositeButton = ({ text, isSelected, onClick }: DepositeButtonProps) => {
  return (
    <button className={styles.depositButtonStyle({ isSelected })} onClick={onClick} type="button">
      <Text tag="b2_sb_long" color={isSelected ? 'white' : 'gray6'}>
        {text}
      </Text>
    </button>
  );
};

export default DepositeButton;
