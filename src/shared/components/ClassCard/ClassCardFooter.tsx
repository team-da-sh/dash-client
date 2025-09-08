import type { PropsWithChildren } from 'react';
import IcArrowRightGray0614 from '@/shared/assets/svg/IcArrowRightGray0614';
import { askTextStyle } from '@/shared/components/ClassCard/style.css';
import Text from '@/shared/components/Text/Text';
import { sprinkles } from '@/shared/styles/sprinkles.css';

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
      {children && <div className={sprinkles({ display: 'flex', gap: 7, mt: 12 })}>{children}</div>}
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
