import type { AxiosError } from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Error from '@/pages/error/Error';
import { useGetReservation, usePostReservation } from '@/pages/reservation/apis/queries';
import AgreeCheckBox from '@/pages/reservation/components/AgreeCheckBox/AgreeCheckBox';
import ApplicantInfo from '@/pages/reservation/components/ApplicantInfo/ApplicantInfo';
import ClassInfo from '@/pages/reservation/components/ClassInfo/ClassInfo';
import * as styles from '@/pages/reservation/components/ReservationStep/reservationStep.css';
import TopInfoContent from '@/pages/reservation/components/TopInfoContent/TopInfoContent';
import { AGREEMENT_TERMS } from '@/pages/reservation/constants/index';
import type { ClassReservationResponseTypes } from '@/pages/reservation/types/api';
import IcCheckcircleGray0524 from '@/shared/assets/svg/IcCheckcircleGray0524';
import IcCheckcircleMain0324 from '@/shared/assets/svg/IcCheckcircleMain0324';
import BlurBotton from '@/shared/components/BlurButton/BlurButton';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import Divider from '@/shared/components/Divider/Divider';
import Head from '@/shared/components/Head/Head';
import Text from '@/shared/components/Text/Text';
import { notify } from '@/shared/components/Toast/Toast';
import { sprinkles } from '@/shared/styles/sprinkles.css';

interface ReservationStepPropTypes {
  onNext: (detail: ClassReservationResponseTypes) => void;
}

const ReservationStep = ({ onNext }: ReservationStepPropTypes) => {
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [agreements, setAgreements] = useState(new Array(AGREEMENT_TERMS.length).fill(false));

  const { id } = useParams<{ id: string }>();
  const { data, isError, isLoading } = useGetReservation(Number(id));
  const { mutate: postReservation } = usePostReservation();

  if (!id) return <Error />;
  if (isLoading) return null;
  if (isError || !data) return <Error />;

  const handleSubmit = () => {
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

  const agreementClassStyle = `${styles.agreementBoxStyle} ${
    isAllChecked ? styles.agreementCheckedStyle : styles.agreementUncheckedStyle
  }`;

  const formattedPrice = `${data.price.toLocaleString()}원`;

  return (
    <main
      className={`${sprinkles({ display: 'flex', flexDirection: 'column', width: '100%' })} ${styles.reservationStyle}`}>
      <TopInfoContent name={data.name} teacherNickname={data.teacherNickname} imageUrl={data.imageUrl} />
      <section
        className={sprinkles({
          display: 'flex',
          width: '100%',
          flexDirection: 'column',
          pt: 24,
          pr: 20,
          pb: 40,
          pl: 20,
          gap: 40,
        })}>
        <div className={sprinkles({ display: 'flex', flexDirection: 'column', width: '100%', gap: 16 })}>
          <Text tag="h6_sb" color="black">
            신청자 정보
          </Text>
          <ApplicantInfo memberName={data.memberName} memberPhoneNumber={data.memberPhoneNumber} />
        </div>

        <div className={sprinkles({ display: 'flex', flexDirection: 'column', width: '100%', gap: 16 })}>
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

      <section
        className={sprinkles({
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          pt: 34,
          pr: 20,
          pl: 20,
        })}>
        <Text tag="h6_sb" color="black" className={sprinkles({ pb: 16 })}>
          필수 약관 전체 동의
        </Text>
        <div className={sprinkles({ pb: 20 })}>
          <div onClick={handleToggleAll} className={agreementClassStyle}>
            {isAllChecked ? <IcCheckcircleMain0324 height={24} /> : <IcCheckcircleGray0524 height={24} />}
            <Head level="h5" tag="b1_sb">
              전체동의
            </Head>
          </div>
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
        <div className={sprinkles({ pb: 42 })}>
          <Text tag="b2_m_long" color="gray6">
            * 서비스 이용을 위한 이용약관, 개인정보 수집 및 이용과 제3자
          </Text>
          <Text tag="b2_m_long" color="gray6">
            제공 동의서, 취소 및 환불 정책을 확인하였으며 이에 동의합니다.
          </Text>
        </div>
      </section>

      <div className={sprinkles({ pl: 20, pr: 20 })}>
        <Divider direction="horizontal" length="100%" thickness="0.1rem" color="gray3" />
      </div>

      <div className={styles.totalPriceContainerStyle}>
        <Head level="h3" tag="h5_sb" color="gray9">
          총 결제 금액
        </Head>
        <Head level="h2" tag="h3_sb" color="main4">
          {formattedPrice}
        </Head>
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
