import Flex from '@/components/Flex';
import Text from '@/components/Text';
import { IcArrowRightSmallGray0732, IcCheckGray0724, IcCheckMain0324 } from '@/assets/svg';
import SvgIcArrowRightSmallMain0332 from '@/assets/svg/IcArrowRightSmallMain0332';

type AgreeComponentProps = {
  text: string;
  isChecked: boolean;
  onToggle: () => void;
  link?: string;
};

const AgreeComponent = ({ text, isChecked, onToggle, link }: AgreeComponentProps) => {
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
        {isChecked ? <IcCheckMain0324 width={'2.4rem'} /> : <IcCheckGray0724 width={'2.4rem'} />}
        <Text tag="b2" color={isChecked ? 'main4' : 'gray7'}>
          {text}
        </Text>
      </Flex>
      <Flex onClick={handleArrowClick} style={{ cursor: 'pointer' }}>
        {isChecked ? <SvgIcArrowRightSmallMain0332 width={'2.4rem'} /> : <IcArrowRightSmallGray0732 width={'2.4rem'} />}
      </Flex>
    </Flex>
  );
};

export default AgreeComponent;
