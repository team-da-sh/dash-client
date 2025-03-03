import IcArrowRightSmallGray0732 from '@/shared/assets/svg/IcArrowRightSmallGray0732';
import IcArrowRightSmallMain0332New from '@/shared/assets/svg/IcArrowRightSmallMain0332New';
import IcCheckGray0724 from '@/shared/assets/svg/IcCheckGray0724';
import IcCheckMain0324 from '@/shared/assets/svg/IcCheckMain0324';
import Flex from '@/shared/components/Flex/Flex';
import Text from '@/shared/components/Text/Text';

interface AgreeCheckBoxProps {
  text: string;
  isChecked: boolean;
  onToggle: () => void;
  link?: string;
}

const AgreeCheckBox = ({ text, isChecked, onToggle, link = '' }: AgreeCheckBoxProps) => {
  const handleArrowClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (link) {
      window.open(link, '_blank');
    }
  };
  return (
    <Flex
      width="100%"
      paddingTop="0.8rem"
      paddingRight="0.8rem"
      paddingBottom="0.8rem"
      paddingLeft="0.8rem"
      justify="spaceBetween"
      align="center"
      onClick={onToggle}>
      <Flex gap="1.2rem" align="center">
        {isChecked ? (
          <IcCheckMain0324 width={'2.4rem'} height={'2.4rem'} />
        ) : (
          <IcCheckGray0724 width={'2.4rem'} height={'2.4rem'} />
        )}
        <Text tag="b2" color={isChecked ? 'main4' : 'gray7'}>
          {text}
        </Text>
      </Flex>
      <Flex onClick={handleArrowClick}>
        {isChecked ? (
          <IcArrowRightSmallMain0332New width={'3.2rem'} height={'3.2rem'} />
        ) : (
          <IcArrowRightSmallGray0732 width={'3.2rem'} height={'3.2rem'} />
        )}
      </Flex>
    </Flex>
  );
};

export default AgreeCheckBox;
