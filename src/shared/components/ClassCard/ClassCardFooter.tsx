import type { PropsWithChildren } from 'react';
import Text from '@/common/components/Text/Text';
import IcArrowRightGray0614 from '@/shared/assets/svg/IcArrowRightGray0614';
import { askTextStyle, footerWrapperStyle } from '@/shared/components/ClassCard/style.css';

interface ClassCardFooterProps extends PropsWithChildren {
  showAsk?: boolean;
}

const ClassCardFooter = ({ showAsk = false, children }: ClassCardFooterProps) => {
  const handleTextClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open('https://forms.gle/JMYzQGxEdVHVogsE6', '_blank');
  };

  return (
    <>
      {children && <div className={footerWrapperStyle}>{children}</div>}
      {showAsk && (
        <div className={askTextStyle}>
          <Text tag="b3_m" color="gray7" onClick={handleTextClick}>
            문의하기
          </Text>
          <IcArrowRightGray0614 width="1.4rem" height="1.4rem" />
        </div>
      )}
    </>
  );
};

export default ClassCardFooter;
