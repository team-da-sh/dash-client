import { useState, useId } from 'react';
import { usePostWithdraw } from '@/pages/mypage/components/Withdraw/apis/queries';
import {
  containerStyle,
  titleStyle,
  descriptionStyle,
  noticeCardStyle,
  textPrimaryStyle,
  dividerStyle,
  noticeListStyle,
  noticeTitleStyle,
  groupListStyle,
  bulletItemStyle,
  agreeSectionStyle,
} from '@/pages/mypage/components/Withdraw/components/NoticeStep/noticeStep.css';
import { NOTICE_CONTENTS } from '@/pages/mypage/components/Withdraw/constants';
import Modal from '@/common/components/Modal/Modal';
import { useModalStore } from '@/common/stores/modal';
import { useWithdrawStore } from '@/common/stores/withdraw';
import IcCheckcircleGray0524 from '@/shared/assets/svg/IcCheckcircleGray0524';
import IcCheckcircleMain0324 from '@/shared/assets/svg/IcCheckcircleMain0324';
import BlurButton from '@/shared/components/BlurButton/BlurButton';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import Divider from '@/shared/components/Divider/Divider';
import Head from '@/shared/components/Head/Head';
import Text from '@/shared/components/Text/Text';
import { notify } from '@/shared/components/Toast/Toast';
import { vars } from '@/shared/styles/theme.css';
import { clearStorage } from '@/shared/utils/handleToken';

interface NoticeStepPropTypes {
  onNext: (data: { email: string }) => void;
}

const NoticeStep = ({ onNext }: NoticeStepPropTypes) => {
  const [isAgreed, setIsAgreed] = useState(false);
  const { openModal } = useModalStore();
  const titleId = useId();

  const handleAgreeToggle = () => setIsAgreed((prev) => !prev);

  const { mutate: withdraw, isPending } = usePostWithdraw();

  const handleOpenModal = () => {
    openModal(({ close }) => (
      <Modal
        key="withdraw-confirm"
        type="default"
        content="정말 탈퇴하시겠어요?"
        description="회원님은 현재 탈퇴 동의를 완료하셨습니다. 서비스를 떠나시면, 즉시 로그아웃되며 모든 활동 기록 및 데이터가 삭제됩니다."
        leftButtonText="이전"
        rightButtonText="탈퇴하기"
        onClose={close}
        onClickHandler={() => {
          if (isPending) return;
          withdraw(undefined, {
            onSuccess: (data) => {
              useWithdrawStore.getState().allowPostWithdraw();
              clearStorage();
              close();
              onNext(data);
            },

            onError: (error) => {
              const serverMessage = error.response?.data?.message ?? '탈퇴 요청 중 오류가 발생했습니다.';

              notify({ message: serverMessage, bottomGap: 'large' });
            },
          });
        }}
      />
    ));
  };

  return (
    <main className={containerStyle} aria-labelledby={titleId}>
      <Head id={titleId} tag="h3_sb" color="black" className={titleStyle}>
        회원 탈퇴
      </Head>

      <Text tag="b2_m_long" color="gray9" className={descriptionStyle}>
        회원 탈퇴 전 아래 유의사항을 확인해 주세요.
      </Text>

      <section className={noticeCardStyle} aria-label="회원 탈퇴 유의사항 안내">
        <Text tag="b2_sb" color="gray10" className={textPrimaryStyle}>
          회원 탈퇴를 진행할 경우,
        </Text>
        <Text tag="b2_sb" color="gray10" className={textPrimaryStyle}>
          관련 법령 및 본 서비스의 정책에 따라
        </Text>
        <Text tag="b2_sb" color="alert3">
          회원 계정과 관련된 모든 정보는 다음과 같이 처리됩니다.
        </Text>

        <Divider color="gray1" className={dividerStyle} />

        <section className={noticeListStyle}>
          {NOTICE_CONTENTS.map((item) => (
            <ul key={item.id}>
              <li className={noticeTitleStyle}>
                {item.icon}
                <Text as="span" tag="b2_sb" color="gray10">
                  {item.title}
                </Text>
              </li>

              {item.type === 'group' && (
                <ul className={groupListStyle}>
                  {item.sections?.map((section) => (
                    <li key={section.id} className={textPrimaryStyle}>
                      <Text as="span" tag="b3_m_narrow" color="gray9">
                        {section.subtitle}
                      </Text>

                      {section.contents.map((content) => (
                        <div key={content.id} className={bulletItemStyle}>
                          <Text as="span" tag="c1_r_narrow" color="gray7">
                            {content.text}
                          </Text>
                        </div>
                      ))}
                    </li>
                  ))}
                </ul>
              )}
              {item.type === 'text' && (
                <li>
                  <Text as="span" tag="c1_r_narrow" color="gray7">
                    {item.content}
                  </Text>
                </li>
              )}
            </ul>
          ))}
        </section>
      </section>

      <button
        type="button"
        className={agreeSectionStyle}
        onClick={handleAgreeToggle}
        aria-pressed={isAgreed}
        aria-label="회원 탈퇴 안내사항에 동의">
        {isAgreed ? (
          <IcCheckcircleMain0324 width={24} height={24} aria-hidden="true" />
        ) : (
          <IcCheckcircleGray0524 width={24} height={24} color={vars.colors.gray05} aria-hidden="true" />
        )}
        <Text as="span" tag="b2_m_long" color="gray10">
          위 내용을 모두 확인하였으며,
          <br />
          회원 탈퇴에 동의합니다.
        </Text>
      </button>

      <BlurButton>
        <BoxButton
          onClick={handleOpenModal}
          disabled={!isAgreed}
          aria-disabled={!isAgreed || isPending}
          aria-label="회원 탈퇴 확인 단계로 이동">
          다음
        </BoxButton>
      </BlurButton>
    </main>
  );
};

export default NoticeStep;
