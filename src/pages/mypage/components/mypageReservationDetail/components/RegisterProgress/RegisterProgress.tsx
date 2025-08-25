import {
  dotsLineStyle,
  progressContatiner,
  statusWrapper,
} from '@/pages/mypage/components/mypageReservationDetail/components/RegisterProgress/RegisterProgress.css';
import SvgIcClearMain0320 from '@/shared/assets/svg/IcClearMain0320';
import Text from '@/shared/components/Text/Text';

const RegisterProgress = () => {
  return (
    <section className={progressContatiner}>
      <div className={statusWrapper}>
        <SvgIcClearMain0320 width={24} height={24} />
        <Text tag="b3_sb">승인대기</Text>
        <hr className={dotsLineStyle({ filled: true })} />
      </div>
      <div className={statusWrapper}>
        <SvgIcClearMain0320 width={24} height={24} />
        <Text tag="b3_sb">승인완료</Text>
      </div>
      <div className={statusWrapper}>
        <SvgIcClearMain0320 width={24} height={24} />
        <Text tag="b3_sb">수강중</Text>
      </div>
      <div className={statusWrapper}>
        <SvgIcClearMain0320 width={24} height={24} />
        <Text tag="b3_sb">수강완료</Text>
      </div>
    </section>
  );
};

export default RegisterProgress;
