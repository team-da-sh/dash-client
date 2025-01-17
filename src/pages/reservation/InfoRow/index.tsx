import { textLabelStyle } from '@/pages/reservation/InfoRow/index.css';
import Flex from '@/components/Flex';
import Text from '@/components/Text';

interface InfoRowProps {
  label: string;
  value: string;
}

const InfoRow = ({ label, value }: InfoRowProps) => {
  return (
    <Flex gap="1.2rem" color="gray08">
      <Text tag="b10" color="gray7" className={textLabelStyle}>
        {label}
      </Text>
      <Text tag="b7" color="gray10">
        {value}
      </Text>
    </Flex>
  );
};

export default InfoRow;
