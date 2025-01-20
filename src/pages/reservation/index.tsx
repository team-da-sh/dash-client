import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AgreeCheckBox from '@/pages/reservation/AgreeCheckBox';
import ApplicantInfo from '@/pages/reservation/ApplicantInfo';
import ClassInfo from '@/pages/reservation/ClassInfo';
import TopInfoContent from '@/pages/reservation/TopInfoContent';
import BoxButton from '@/components/BoxButton';
import Divider from '@/components/Divider';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Header from '@/components/Header';
import Text from '@/components/Text';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { IcCheckcircleGray0524, IcCheckcircleMain0324 } from '@/assets/svg';
import { MY_RESERVATION_DATA } from '@/mocks/mockMyReservationData';
import {
  agreementBoxStyle,
  agreementCheckedStyle,
  agreementContainerStyle,
  agreementUncheckedStyle,
  headerStyle,
  reservationStyle,
  totalPriceContainerStyle,
  bottomButtonStyle,
  agreementTextStyle,
} from './index.css';

const Reservation = () => {
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [agreements, setAgreements] = useState([false, false]);

  const data = MY_RESERVATION_DATA;

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

  const { lessonRound, lessonIndividualPrice } = MY_RESERVATION_DATA;
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(ROUTES_CONFIG.home.path);
  };
  const totalPrice = lessonRound.length * lessonIndividualPrice;

  return (
    <Flex direction="column" width="100%" className={reservationStyle}>
      <div className={headerStyle}>
        <Header.Root isColor={true}>
          <Header.BackIcon />
          <Header.Title title="클래스 신청" />
        </Header.Root>
      </div>
      <TopInfoContent />
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
          <ClassInfo
            lessonName={data.lessonName}
            lessonLocation={data.lessonLocation}
            teacherName={data.teacherName}
            lessonLevel={data.lessonLevel}
            lessonRound={data.lessonRound}
          />
        </Flex>
        <Flex direction="column" width="100%" gap="1.6rem">
          <Text tag="b4" color="gray9">
            신청자 정보
          </Text>
          <ApplicantInfo bookerName={data.bookerName} bookerPhoneNumber={data.bookerPhoneNumber} />
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
              <AgreeCheckBox
                text="취소 및 환불 약관  (필수)"
                isChecked={agreements[0]}
                onToggle={() => handleToggle(0)}
                link="https://youtu.be/i9c_dsBzc3Y?feature=shared"
              />
              <AgreeCheckBox
                text="전자결제 서비스 이용약관  (필수)"
                isChecked={agreements[1]}
                onToggle={() => handleToggle(1)}
                link="https://youtu.be/i9c_dsBzc3Y?feature=sharedm"
              />
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
          {Number(totalPrice).toLocaleString()}원
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
