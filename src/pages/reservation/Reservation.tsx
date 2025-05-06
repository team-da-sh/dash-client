import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Error from '@/pages/error/Error';
import { useGetReservaion } from '@/pages/reservation/apis/queries';
import AgreeCheckBox from '@/pages/reservation/components/AgreeCheckBox/AgreeCheckBox';
import ApplicantInfo from '@/pages/reservation/components/ApplicantInfo/ApplicantInfo';
import ClassInfo from '@/pages/reservation/components/ClassInfo/ClassInfo';
import TopInfoContent from '@/pages/reservation/components/TopInfoContent/TopInfoContent';
import { AGREEMENT_TERMS } from '@/pages/reservation/constants/index';
import * as styles from '@/pages/reservation/reservation.css';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import IcCheckcircleGray0524 from '@/shared/assets/svg/IcCheckcircleGray0524';
import IcCheckcircleMain0324 from '@/shared/assets/svg/IcCheckcircleMain0324';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import Divider from '@/shared/components/Divider/Divider';
import Head from '@/shared/components/Head/Head';
import Text from '@/shared/components/Text/Text';
import { sprinkles } from '@/shared/styles/sprinkles.css';

const Reservation = () => {
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [agreements, setAgreements] = useState([false, false]);

  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <Error />;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, isError, isLoading } = useGetReservaion(id);

  if (isLoading) {
    return <></>;
  }

  if (isError || !data) {
    return <Error />;
  }

  const handleToggleAll = () => {
    const newState = !isAllChecked;
    setIsAllChecked(newState);
    setAgreements([newState, newState]);
  };

  const handleToggle = (index: number) => {
    const newAgreements = [...agreements];
    newAgreements[index] = !newAgreements[index];
    setAgreements(newAgreements);

    setIsAllChecked(newAgreements.every((isChecked) => isChecked));
  };

  const totalPrice = data.price;

  const className = data.name;

  const studentName = data.memberName;

  const handleButtonClick = async () => {
    navigate(ROUTES_CONFIG.payments.path, { state: { lessonId: id, totalPrice, className, studentName } });
  };

  const agreementClassStyle = `${styles.agreementBoxStyle} ${
    isAllChecked ? styles.agreementCheckedStyle : styles.agreementUncheckedStyle
  }`;

  return (
    <main
      className={`${sprinkles({ display: 'flex', flexDirection: 'column', width: '100%' })} ${styles.reservationStyle}`}>
      <section>
        <TopInfoContent name={data.name} teacherNickname={data.teacherNickname} imageUrl={data.imageUrl} />
      </section>
      <section
        className={sprinkles({
          display: 'flex',
          width: '100%',
          flexDirection: 'column',
          pt: 24,
          pr: 20,
          pb: 36,
          pl: 20,
          gap: 32,
        })}>
        <div className={sprinkles({ display: 'flex', flexDirection: 'column', width: '100%', gap: 16 })}>
          <Text tag="b2_sb" color="gray9">
            클래스 정보
          </Text>
          <ClassInfo
            name={data.name}
            location={data.location}
            locationDetail={data.locationDetail}
            teacherNickname={data.teacherNickname}
            level={data.level}
            lessonRound={data.lessonRound.lessonRounds}
          />
        </div>
        <div className={sprinkles({ display: 'flex', flexDirection: 'column', width: '100%', gap: 16 })}>
          <Text tag="b2_sb" color="gray9">
            신청자 정보
          </Text>
          <ApplicantInfo memberName={data.memberName} memberPhoneNumber={data.memberPhoneNumber} />
        </div>
      </section>

      <Divider direction="horizontal" length="100%" thickness="1.1rem" color="gray2" />

      <section
        className={sprinkles({ display: 'flex', flexDirection: 'column', width: '100%', pt: 28, pr: 20, pl: 20 })}>
        <div className={sprinkles({ display: 'flex', flexDirection: 'column', width: '100%', gap: 20 })}>
          <Text tag="b2_sb" color="gray9">
            필수 약관 전체 동의
          </Text>
          <div>
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
          <Text tag="b2_m_long" color="gray6" className={sprinkles({ pb: 42 })}>
            * 예약 서비스 이용을 위한 개인정보 수집 및 제 3자 제공,
            <br />
            취소/환불 규정을 확인하였으며 이에 동의합니다.
          </Text>
        </div>
        <Divider direction="horizontal" length="100%" thickness="0.1rem" color="gray3" />
      </section>

      <div className={styles.totalPriceContainerStyle}>
        <Head level="h3" tag="h5_sb" color="gray9">
          총 결제 금액
        </Head>
        <Head level="h2" tag="h3_sb" color="main4">
          {data.price.toLocaleString()}원
        </Head>
      </div>
      <section className={styles.bottomButtonStyle}>
        <BoxButton variant="primary" isDisabled={!isAllChecked} onClick={isAllChecked ? handleButtonClick : undefined}>
          신청하기
        </BoxButton>
      </section>
    </main>
  );
};

export default Reservation;
