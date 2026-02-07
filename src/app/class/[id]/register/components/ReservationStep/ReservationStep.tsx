'use client';

import type { AxiosError } from 'axios';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { useGetReservation, usePostReservation } from '@/app/class/[id]/register/apis/queries';
import AgreeCheckBox from '@/app/class/[id]/register/components/AgreeCheckBox/AgreeCheckBox';
import ApplicantInfo from '@/app/class/[id]/register/components/ApplicantInfo/ApplicantInfo';
import ClassInfo from '@/app/class/[id]/register/components/ClassInfo/ClassInfo';
import {
  reservationStyle,
  agreementBoxStyle,
  agreementCheckedStyle,
  agreementUncheckedStyle,
  totalPriceContainerStyle,
  priceWrapperStyle,
  mainStyle,
  sectionStyle,
  sectionContentStyle,
  agreementSectionStyle,
  titleStyle,
  agreementWrapperStyle,
  noticeWrapperStyle,
  dividerWrapperStyle,
} from '@/app/class/[id]/register/components/ReservationStep/reservationStep.css';
import TopInfoContent from '@/app/class/[id]/register/components/TopInfoContent/TopInfoContent';
import { AGREEMENT_TERMS } from '@/app/class/[id]/register/constant';
import type { ClassReservationResponseTypes } from '@/app/class/[id]/register/types';
import ErrorPage from '@/app/error/page';
import BlurBotton from '@/common/components/BlurButton/BlurButton';
import BoxButton from '@/common/components/BoxButton/BoxButton';
import Divider from '@/common/components/Divider/Divider';
import Head from '@/common/components/Head/Head';
import Text from '@/common/components/Text/Text';
import { notify } from '@/common/components/Toast/Toast';
import IcCheckcircleGray0524 from '@/shared/assets/svg/IcCheckcircleGray0524';
import IcCheckcircleMain0324 from '@/shared/assets/svg/IcCheckcircleMain0324';
import { vars } from '@/shared/styles/theme.css';

interface ReservationStepPropTypes {
  onNext: (detail: ClassReservationResponseTypes) => void;
}

const ReservationStep = ({ onNext }: ReservationStepPropTypes) => {
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [agreements, setAgreements] = useState(new Array(AGREEMENT_TERMS.length).fill(false));

  const params = useParams<{ id: string }>();
  const id = params.id;
  const { data, isError, isLoading } = useGetReservation(Number(id));
  const { mutate: postReservation, isPending } = usePostReservation();

  if (!id) return <ErrorPage />;
  if (isLoading) return null;
  if (isError || !data) return <ErrorPage />;

  const handleSubmit = () => {
    if (isPending) return;
    postReservation(
      { lessonId: id },
      {
        onSuccess: onNext,
        onError: (error: AxiosError<{ message: string }>) => {
          const message = error?.response?.data?.message || '예약 중 오류가 발생했어요. 다시 시도해주세요.';
          notify({
            message,
            icon: 'fail',
            bottomGap: 'large',
          });
        },
      }
    );
  };

  const handleToggleAll = () => {
    const newState = !isAllChecked;
    setIsAllChecked(newState);
    setAgreements(new Array(AGREEMENT_TERMS.length).fill(newState));
  };

  const handleToggle = (index: number) => {
    const newAgreements = [...agreements];
    newAgreements[index] = !newAgreements[index];
    setAgreements(newAgreements);
    setIsAllChecked(newAgreements.every((isChecked) => isChecked));
  };

  const agreementClassStyle = `${agreementBoxStyle} ${isAllChecked ? agreementCheckedStyle : agreementUncheckedStyle}`;

  return (
    <main className={`${mainStyle} ${reservationStyle}`}>
      <TopInfoContent name={data.name} teacherNickname={data.teacherNickname} imageUrl={data.imageUrl} />
      <section className={sectionStyle}>
        <div className={sectionContentStyle}>
          <Text tag="h6_sb" color="black">
            신청자 정보
          </Text>
          <ApplicantInfo memberName={data.memberName} memberPhoneNumber={data.memberPhoneNumber} />
        </div>

        <div className={sectionContentStyle}>
          <Text tag="h6_sb" color="black">
            클래스 정보
          </Text>
          <ClassInfo
            lessonName={data.name}
            location={data.location}
            locationDetail={data.locationDetail}
            teacherNickname={data.teacherNickname}
            level={data.level}
            lessonRound={data.lessonRound.lessonRounds}
          />
        </div>
      </section>

      <Divider direction="horizontal" length="100%" thickness="1.1rem" color="gray2" />

      <section className={agreementSectionStyle}>
        <Text tag="h6_sb" color="black" className={titleStyle}>
          필수 약관 전체 동의
        </Text>
        <div className={agreementWrapperStyle}>
          <button onClick={handleToggleAll} className={agreementClassStyle}>
            {isAllChecked ? (
              <IcCheckcircleMain0324 height={24} />
            ) : (
              <IcCheckcircleGray0524 height={24} color={vars.colors.gray05} />
            )}
            <Head level="h5" tag="b1_sb">
              전체동의
            </Head>
          </button>
          {AGREEMENT_TERMS.map((term, index) => (
            <AgreeCheckBox
              key={index}
              text={term.text}
              isChecked={agreements[index]}
              onToggle={() => handleToggle(index)}
              link={term.link}
            />
          ))}
        </div>
        <div className={noticeWrapperStyle}>
          <Text tag="b2_m_long" color="gray6">
            * 서비스 이용을 위한 이용약관, 개인정보 수집 및 이용과 제3자
          </Text>
          <Text tag="b2_m_long" color="gray6">
            제공 동의서, 취소 및 환불 정책을 확인하였으며 이에 동의합니다.
          </Text>
        </div>
      </section>

      <div className={dividerWrapperStyle}>
        <Divider direction="horizontal" length="100%" thickness="0.1rem" color="gray3" />
      </div>

      <div className={totalPriceContainerStyle}>
        <Head level="h3" tag="h5_sb" color="gray9">
          총 결제 금액
        </Head>
        <div className={priceWrapperStyle}>
          <Head level="h2" tag="h3_sb" color="main4">
            {data.price.toLocaleString()}
          </Head>
          <Head level="h2" tag="h3_sb" color="main4">
            원
          </Head>
        </div>
      </div>

      <BlurBotton blurColor="gray">
        <BoxButton variant="primary" isDisabled={!isAllChecked} onClick={handleSubmit}>
          신청하기
        </BoxButton>
      </BlurBotton>
    </main>
  );
};

export default ReservationStep;
