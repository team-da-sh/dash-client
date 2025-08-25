import {
  dotsLineStyle,
  progressContatiner,
  statusWrapper,
  textStyle,
} from '@/pages/mypage/components/mypageReservationDetail/components/RegisterProgress/RegisterProgress.css';
import SvgIcClearMain0320 from '@/shared/assets/svg/IcClearMain0320';
import Text from '@/shared/components/Text/Text';

const RegisterProgress = () => {
  return (
    <section className={progressContatiner}>
      <div className={statusWrapper}>
        <SvgIcClearMain0320 width={24} height={24} />
        <Text tag="b3_sb" className={textStyle}>
          승인대기
        </Text>
        <hr className={dotsLineStyle({ filled: true })} />
      </div>
      <div className={statusWrapper}>
        <SvgIcClearMain0320 width={24} height={24} />
        <Text tag="b3_sb" className={textStyle}>
          승인완료
        </Text>
        <hr className={dotsLineStyle({ filled: false })} />
      </div>
      <div className={statusWrapper}>
        <SvgIcClearMain0320 width={24} height={24} />
        <Text tag="b3_sb" className={textStyle}>
          수강중
        </Text>
        <hr className={dotsLineStyle({ filled: false })} />
      </div>
      <div className={statusWrapper}>
        <SvgIcClearMain0320 width={24} height={24} />
        <Text tag="b3_sb" className={textStyle}>
          수강완료
        </Text>
      </div>
    </section>
  );
};

export default RegisterProgress;
