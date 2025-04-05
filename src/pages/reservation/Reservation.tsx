import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Error from '@/pages/error/Error';
import { useGetReservaion } from '@/pages/reservation/apis/queries';
import AgreeCheckBox from '@/pages/reservation/components/AgreeCheckBox/AgreeCheckBox';
import ApplicantInfo from '@/pages/reservation/components/ApplicantInfo/ApplicantInfo';
import ClassInfo from '@/pages/reservation/components/ClassInfo/ClassInfo';
import TopInfoContent from '@/pages/reservation/components/TopInfoContent/TopInfoContent';
import { AGREEMENT_TERMS } from '@/pages/reservation/constants/agreementTerms';
import {
  agreementBoxStyle,
  agreementCheckedStyle,
  agreementContainerStyle,
  agreementTextStyle,
  agreementUncheckedStyle,
  bottomButtonStyle,
  headerStyle,
  reservationStyle,
  totalPriceContainerStyle,
} from '@/pages/reservation/reservation.css';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import IcCheckcircleGray0524 from '@/shared/assets/svg/IcCheckcircleGray0524';
import IcCheckcircleMain0324 from '@/shared/assets/svg/IcCheckcircleMain0324';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import Divider from '@/shared/components/Divider/Divider';
import Flex from '@/shared/components/Flex/Flex';
import Head from '@/shared/components/Head/Head';
import Header from '@/shared/components/Header/Header';
import Text from '@/shared/components/Text/Text';

const Reservation = () => {
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [agreements, setAgreements] = useState([false, false]);

  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();
  if (!id) {
    return <Error />;
  }

  const { data, isError, isLoading } = useGetReservaion(id);

  if (isLoading) {
    return <></>;
  }

  if (isError || !data) {
    return <Error />;
  }

  // 전체 체크박스, 상태 동기화
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

  const studentName = data.studentName;

  const handleButtonClick = async () => {
    {
      navigate(ROUTES_CONFIG.payments.path, { state: { lessonId: id, totalPrice, className, studentName } });
    }
  };

  return (
    <Flex direction="column" width="100%" className={reservationStyle}>
      <div className={headerStyle}>
        <Header.Root isColor={true}>
          <Header.BackIcon />
          <Header.Title title="클래스 신청" />
        </Header.Root>
      </div>
      <TopInfoContent {...data} />
      <Flex
        width="100%"
        direction="column"
        paddingTop="2.4rem"
        paddingLeft="2rem"
        paddingRight="2rem"
        paddingBottom="3.6rem"
        gap="3.2rem">
        <Flex direction="column" width="100%" gap="1.6rem">
          <Text tag="b4" color="gray9">
            클래스 정보
          </Text>
          <ClassInfo {...data} lessonRound={data.lessonRound.lessonRounds} />
        </Flex>
        <Flex direction="column" width="100%" gap="1.6rem">
          <Text tag="b4" color="gray9">
            신청자 정보
          </Text>
          <ApplicantInfo {...data} />
        </Flex>
      </Flex>

      <Divider direction="horizontal" length="100%" thickness="1.1rem" color="gray2" />

      <Flex direction="column" width="100%" paddingTop="2.8rem" paddingRight="2rem" paddingLeft="2rem">
        <Flex direction="column" width="100%" gap="2rem">
          <Text tag="b4" color="gray9">
            필수 약관 전체 동의
          </Text>
          <div className={agreementContainerStyle}>
            <div
              onClick={handleToggleAll}
              className={`${agreementBoxStyle} ${isAllChecked ? agreementCheckedStyle : agreementUncheckedStyle}`}>
              {isAllChecked ? <IcCheckcircleMain0324 height={24} /> : <IcCheckcircleGray0524 height={24} />}
              <Head level="h5" tag="h6">
                전체동의
              </Head>
            </div>

            <Flex direction="column" width="100%">
              {AGREEMENT_TERMS.map((term, index) => (
                <AgreeCheckBox
                  key={index}
                  text={term.text}
                  isChecked={agreements[index]}
                  onToggle={() => handleToggle(index)}
                  link={term.link}
                />
              ))}
            </Flex>
          </div>
          <Text tag="b3" color="gray6" className={agreementTextStyle}>
            * 예약 서비스 이용을 위한 개인정보 수집 및 제 3자 제공,
            <br />
            취소/환불 규정을 확인하였으며 이에 동의합니다.
          </Text>
        </Flex>
        <Divider direction="horizontal" length="100%" thickness="0.1rem" color="gray3" />
      </Flex>

      <div className={totalPriceContainerStyle}>
        <Head level="h3" tag="h4" color="gray9">
          총 결제 금액
        </Head>
        <Head level="h2" tag="h2" color="main4">
          {data.price.toLocaleString()}원
        </Head>
      </div>
      <Flex width="100%" className={bottomButtonStyle}>
        <BoxButton variant="primary" isDisabled={!isAllChecked} onClick={isAllChecked ? handleButtonClick : undefined}>
          신청하기
        </BoxButton>
      </Flex>
    </Flex>
  );
};

export default Reservation;
