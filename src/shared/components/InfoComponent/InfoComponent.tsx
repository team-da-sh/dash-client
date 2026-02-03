import { useRouter } from 'next/navigation';
import IcArrowRightGray0614 from '@/shared/assets/svg/IcArrowRightGray0614';
import {
  infoContainerStyle,
  imgStyle,
  wrapperStyle,
  textWrapperStyle,
  profileWrapperStyle,
  arrowIconStyle,
} from '@/shared/components/InfoComponent/infoComponent.css';

interface InfoComponentPropTypes {
  profileImageUrl: string;
  mainText: React.ReactNode;
  subContent: React.ReactNode;
  type: string;
}

const InfoComponent = ({ type, profileImageUrl, mainText, subContent }: InfoComponentPropTypes) => {
  const router = useRouter();
  const handleEditProfileClick = () => {
    if (type === 'student') {
      router.push('/my/edit-profile');
    } else {
      router.push('/my/manage-profile');
    }
  };

  return (
    <section className={infoContainerStyle}>
      <div className={profileWrapperStyle}>
        <img
          src={profileImageUrl || 'images/image_profile_basic.png'}
          alt="프로필 이미지"
          className={imgStyle}
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <div className={wrapperStyle}>
          <div className={textWrapperStyle}>{mainText}</div>
          <div>{subContent}</div>
        </div>
      </div>

      <button type="button" onClick={handleEditProfileClick}>
        <IcArrowRightGray0614 className={arrowIconStyle} />
      </button>
    </section>
  );
};

export default InfoComponent;
