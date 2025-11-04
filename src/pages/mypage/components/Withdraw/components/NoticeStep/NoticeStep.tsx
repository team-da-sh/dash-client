import { useState } from 'react';
import {
  containerStyle,
  titleStyle,
  descriptionStyle,
  noticeCardStyle,
  textPrimaryStyle,
  textSecondaryStyle,
  bulletListStyle,
  bulletItemStyle,
  legalNoticeStyle,
  agreeSectionStyle,
} from '@/pages/mypage/components/Withdraw/components/NoticeStep/noticeStep.css';
import { BULLET_LIST } from '@/pages/mypage/components/Withdraw/constants';
import IcCheckcircleGray0524 from '@/shared/assets/svg/IcCheckcircleGray0524';
import IcCheckcircleMain0324 from '@/shared/assets/svg/IcCheckcircleMain0324';
import BlurButton from '@/shared/components/BlurButton/BlurButton';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import Text from '@/shared/components/Text/Text';
import { vars } from '@/shared/styles/theme.css';

interface NoticeStepPropTypes {
  onNext: () => void;
}

const NoticeStep = ({ onNext }: NoticeStepPropTypes) => {
  const [agreed, setAgreed] = useState(false);
  const handleAgreeToggle = () => setAgreed((prev) => !prev);

  return (
    <div className={containerStyle}>
      <Text tag="h3_sb" color="black" className={titleStyle}>
        회원 탈퇴
      </Text>

      <Text tag="b2_m_long" color="gray9" className={descriptionStyle}>
        회원 탈퇴 전 아래 유의사항을 확인해 주세요.
      </Text>

      <div className={noticeCardStyle}>
        <Text tag="b2_sb" color="gray10" className={textPrimaryStyle}>
          회원 탈퇴를 진행하면 계정과 관련된
        </Text>
        <Text tag="b2_sb" color="alert3" className={textSecondaryStyle}>
          모든 활동 정보가 삭제되며, 복구는 불가능합니다.
        </Text>

        <ul className={bulletListStyle}>
          {BULLET_LIST.map((item, idx) => (
            <li key={idx} className={bulletItemStyle}>
              {item.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </li>
          ))}
        </ul>

        <Text tag="b3_m" color="gray8" className={legalNoticeStyle}>
          단, 전자상거래 등에서의 소비자 보호에 관한 법률 및 관련 법령에
          <br />
          의거하여 구매/거래 기록, 분쟁 해결 기록 등 일부 정보는 법이 정한
          <br />
          기간 (최대 5년) 동안 보존된 후 파기됩니다.
        </Text>
      </div>

      <div className={agreeSectionStyle} onClick={handleAgreeToggle}>
        {agreed ? (
          <IcCheckcircleMain0324 width={24} height={24} />
        ) : (
          <IcCheckcircleGray0524 width={24} height={24} color={vars.colors.gray05} />
        )}
        <Text tag="b2_m_long" color="gray10">
          위 내용을 모두 확인하였으며,
          <br />
          회원 탈퇴에 동의합니다.
        </Text>
      </div>

      <BlurButton>
        <BoxButton onClick={onNext} disabled={!agreed}>
          다음
        </BoxButton>
      </BlurButton>
    </div>
  );
};

export default NoticeStep;
