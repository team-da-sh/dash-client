import { textLabelStyle } from '@/pages/reservation/components/InfoRow/infoRow.css';
import Flex from '@/shared/components/Flex/Flex';
import Text from '@/shared/components/Text/Text';

interface InfoRowProps {
  label: string;
  value: string;
}

const InfoRow = ({ label, value }: InfoRowProps) => {
  return (
    <Flex gap="1.2rem" color="gray08">
      <Text tag="b3_sb_narrow" color="gray7" className={textLabelStyle}>
        {label}
      </Text>
      <Text tag="b3_m" color="gray10">
        {value}
      </Text>
    </Flex>
  );
};

export default InfoRow;
