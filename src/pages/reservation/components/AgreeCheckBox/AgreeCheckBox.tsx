import IcArrowRightSmallGray0732 from '@/shared/assets/svg/IcArrowRightSmallGray0732';
import IcArrowRightSmallMain0332New from '@/shared/assets/svg/IcArrowRightSmallMain0332New';
import IcCheckGray0724 from '@/shared/assets/svg/IcCheckGray0724';
import IcCheckMain0324 from '@/shared/assets/svg/IcCheckMain0324';
import Text from '@/shared/components/Text/Text';
import { sprinkles } from '@/shared/styles/sprinkles.css';

interface AgreeCheckBoxPropTypes {
  text: string;
  isChecked: boolean;
  onToggle: () => void;
  link?: string;
}

const AgreeCheckBox = ({ text, isChecked, onToggle, link = '' }: AgreeCheckBoxPropTypes) => {
  const handleArrowClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (link) {
      window.open(link, '_blank');
    }
  };
  return (
    <div
      className={sprinkles({ display: 'flex', width: '100%', p: 8, justifyContent: 'space-between' })}
      onClick={onToggle}>
      <div className={sprinkles({ display: 'flex', gap: 12, alignItems: 'center' })}>
        {isChecked ? <IcCheckMain0324 width={24} height={24} /> : <IcCheckGray0724 width={24} height={24} />}
        <Text tag="b2_m" color={isChecked ? 'main4' : 'gray7'}>
          {text}
        </Text>
      </div>
      <div onClick={handleArrowClick}>
        {isChecked ? (
          <IcArrowRightSmallMain0332New width={32} height={32} />
        ) : (
          <IcArrowRightSmallGray0732 width={32} height={32} />
        )}
      </div>
    </div>
  );
};

export default AgreeCheckBox;
