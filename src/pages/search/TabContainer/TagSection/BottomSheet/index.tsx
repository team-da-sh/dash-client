import { bottomSheetStyle, overlayStyle } from '@/pages/search/TabContainer/TagSection/BottomSheet/index.css';
import Flex from '@/components/Flex';

interface BottomSheetProps {
  onClose: () => void;
}

const BottomSheet = ({ onClose }: BottomSheetProps) => {
  document.body.style.overflow = 'hidden';
  return (
    <div className={bottomSheetStyle}>
      <div className={overlayStyle} onClick={onClose} />
      <Flex direction="column" className={bottomSheetStyle}></Flex>
    </div>
  );
};

export default BottomSheet;
