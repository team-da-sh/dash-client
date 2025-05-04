import SvgIcArrowRightGray0614 from '@/shared/assets/svg/IcArrowRightGray0614';
import * as styles from '@/shared/components/InfoComponent/infoComponent.css';
import { sprinkles } from '@/shared/styles/sprinkles.css';

interface InfoComponentPropTypes {
  profileImageUrl: string;
  mainText: React.ReactNode;
  subContent: React.ReactNode;
}

const InfoComponent = ({ profileImageUrl, mainText, subContent }: InfoComponentPropTypes) => {
  return (
    <section className={styles.infoContainerStyle}>
      <div className={sprinkles({ display: 'flex', gap: 12, alignItems: 'center' })}>
        <img src={profileImageUrl} alt="프로필 이미지" className={styles.imgStyle} />
        <div className={styles.wrapperStyle}>
          <div className={styles.textWrapperStyle}>{mainText}</div>
          <div>{subContent}</div>
        </div>
      </div>

      <SvgIcArrowRightGray0614 className={sprinkles({ width: 24, height: 24 })} />
    </section>
  );
};

export default InfoComponent;
