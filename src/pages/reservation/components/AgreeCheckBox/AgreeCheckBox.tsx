import { containerStyle, contentStyle } from '@/pages/reservation/components/AgreeCheckBox/agreeCheckBox.css';
import Text from '@/common/components/Text/Text';
import IcArrowRightSmallGray0732 from '@/shared/assets/svg/IcArrowRightSmallGray0732';
import IcArrowRightSmallMain0332New from '@/shared/assets/svg/IcArrowRightSmallMain0332New';
import IcCheckGray0724 from '@/shared/assets/svg/IcCheckGray0724';
import IcCheckMain0324 from '@/shared/assets/svg/IcCheckMain0324';

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
    <div className={containerStyle} onClick={onToggle}>
      <div className={contentStyle}>
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
