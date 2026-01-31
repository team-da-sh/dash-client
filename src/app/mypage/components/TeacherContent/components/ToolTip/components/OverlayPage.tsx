import * as styles from '@/app/mypage/components/TeacherContent/components/ToolTip/components/overlayPage.css';

interface OverlayPagePropTypes {
  isVisible: boolean;
}
const OverlayPage = ({ isVisible }: OverlayPagePropTypes) => {
  if (!isVisible) return null;

  return <div className={styles.overlayStyle}></div>;
};

export default OverlayPage;
