import { AgreeCheckBoxProps } from '@/pages/reservation/types';
import Flex from '@/components/Flex';
import Text from '@/components/Text';
import {
  IcArrowRightSmallGray0732,
  IcArrowRightSmallMain0332New,
  IcCheckGray0724,
  IcCheckMain0324,
} from '@/assets/svg';

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
      <Flex gap="1.2rem">
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
