import { useState, useId } from 'react';
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
import type { ContentObj, NoticeItem, SectionObj } from '@/pages/mypage/components/Withdraw/constants/index';
import { NOTICE_CONTENTS } from '@/pages/mypage/components/Withdraw/constants/index';
import Modal from '@/common/components/Modal/Modal';
import { useModalStore } from '@/common/stores/modal';
import IcCheckcircleGray0524 from '@/shared/assets/svg/IcCheckcircleGray0524';
import IcCheckcircleMain0324 from '@/shared/assets/svg/IcCheckcircleMain0324';
import BlurButton from '@/shared/components/BlurButton/BlurButton';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import Divider from '@/shared/components/Divider/Divider';
import Head from '@/shared/components/Head/Head';
import Text from '@/shared/components/Text/Text';
import { vars } from '@/shared/styles/theme.css';

interface NoticeStepPropTypes {
  onNext: () => void;
}

const NoticeStep = ({ onNext }: NoticeStepPropTypes) => {
  const [isAgreed, setIsAgreed] = useState(false);
  const { openModal } = useModalStore();
  const titleId = useId();

  const handleAgreeToggle = () => setIsAgreed((prev) => !prev);

  const handleOpenModal = () => {
    openModal(({ close }) => (
      <Modal
        key="withdraw-confirm"
        type="default"
        content="정말 탈퇴하시겠어요?"
        // description="회원님은 현재 탈퇴 동의를 완료하셨습니다. 모든 데이터는 영구 삭제되며 복구가 불가능합니다."
        leftButtonText="이전"
        rightButtonText="탈퇴하기"
        onClose={close}
        onClickHandler={() => {
          close();
          onNext();
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
          {NOTICE_CONTENTS.map((item: NoticeItem) => (
            <ul key={item.id}>
              <li className={noticeTitleStyle}>
                {item.icon}
                <Text tag="b2_sb" color="gray10">
                  {item.title}
                </Text>
              </li>
              <div className={groupListStyle}>
                {item.type === 'group' &&
                  (item.sections || []).map((section: SectionObj) => (
                    <div key={section.id}>
                      <Text tag="b3_m_narrow" color="gray9" className={textPrimaryStyle}>
                        {section.subtitle}
                      </Text>
                      {(section.contents || []).map((content: ContentObj) => (
                        <Text tag="c1_r_narrow" color="gray7" className={bulletItemStyle}>
                          {content.text}
                        </Text>
                      ))}
                    </div>
                  ))}
              </div>
              {item.type === 'text' && (
                <Text tag="c1_r_narrow" color="gray7">
                  {item.content}
                </Text>
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
          aria-disabled={!isAgreed}
          aria-label="회원 탈퇴 확인 단계로 이동">
          다음
        </BoxButton>
      </BlurButton>
    </main>
  );
};

export default NoticeStep;
