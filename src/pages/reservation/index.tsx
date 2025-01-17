import { useState } from 'react';
import InfoComponent from '@/pages/reservation/InfoComponent';
import Divider from '@/components/Divider';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Header from '@/components/Header';
import Text from '@/components/Text';
import { IcCheckcircleGray0524, IcCheckcircleMain0324 } from '@/assets/svg';
import { MY_RESERVATION_DATA } from '@/mocks/mockMyReservationData';
import AgreeComponent from './AgreeComponent';
import BookerComponent from './BookerComponent';
import BottomButton from './BottomButton';
import TopImageComponent from './TopImageComponent';
import { agreementBox, agreementChecked, agreementContainer, agreementUnchecked, headerStyle, reservationStyle, totalPriceContainer } from './index.css';
import { useNavigate } from "react-router-dom";
import { ROUTES_CONFIG } from "@/routes/routesConfig";

const Reservation = () => {
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [agreements, setAgreements] = useState([false, false, false]);

  // 전체 체크박스, 상태 동기화
  const handleToggleAll = () => {
    const newState = !isAllChecked;
    setIsAllChecked(newState);
    setAgreements([newState, newState, newState]);
  };

  const handleToggle = (index: number) => {
    const newAgreements = [...agreements];
    newAgreements[index] = !newAgreements[index];
    setAgreements(newAgreements);

    setIsAllChecked(newAgreements.every((isChecked) => isChecked));
  };
  const { lessonIndividualPrice } = MY_RESERVATION_DATA;
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate(ROUTES_CONFIG.home.path);
  };
  return (
    <Flex direction="column" width="100%" className={reservationStyle}>
      <div className={headerStyle}>
        <Header.Root isColor={true}>
          <Header.BackIcon />
          <Header.Title title="클래스 신청" />
        </Header.Root>
      </div>
      <TopImageComponent />
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
          <InfoComponent />
        </Flex>
        <Flex direction="column" width="100%" gap="1.6rem">
          <Text tag="b4" color="gray9">
            신청자 정보
          </Text>
          <BookerComponent />
        </Flex>
      </Flex>
      <Divider direction="horizontal" length="100%" thickness="1.1rem" />

      {/* 구분선 아래 퍼블리싱 */}

      <Flex direction="column" width="100%" paddingTop="2.8rem" paddingRight="2rem" paddingLeft="2rem">
        <Flex direction="column" width="100%" gap="2rem">
          <Text tag="b4" color="gray9">
            필수 약관 전체 동의
          </Text>
          <div className={agreementContainer}>
          <div
              onClick={handleToggleAll}
              className={`${agreementBox} ${isAllChecked ? agreementChecked : agreementUnchecked}`}
            >
              {isAllChecked ? <IcCheckcircleMain0324 height={24} /> : <IcCheckcircleGray0524 height={24} />}
              <Head level="h5" tag="h6">
                전체동의
              </Head>
            </div>

            <Flex direction="column" width="100%">
              <AgreeComponent
                text="개인정보 제공 동의  (필수)"
                isChecked={agreements[1]}
                onToggle={() => handleToggle(1)}
                link="https://youtube.com"
              />
              <AgreeComponent
                text="취소 및 환불 규칙  (필수)"
                isChecked={agreements[2]}
                onToggle={() => handleToggle(2)}
                link="https://youtube.com"
              />
            </Flex>
          </div>
          <Text tag="b3" color="gray6" style={{ paddingBottom: '4.2rem' }}>
            * 예약 서비스 이용을 위한 개인정보 수집 및 제 3자 제공, 취소/환불 규정을 확인하였으며 이에 동의합니다.
          </Text>
        </Flex>
        <Divider direction="horizontal" length="100%" thickness="0.1rem" />
      </Flex>

      <div className={totalPriceContainer}>
        <Head level="h3" tag="h4" color="gray9">
          총 결제 금액
        </Head>
        <Head level="h2" tag="h2" color="main4">
          {Number(lessonIndividualPrice).toLocaleString()}원{' '}
        </Head>
      </div>
      <BottomButton
        isEnabled={isAllChecked}
        onClick={handleButtonClick}
      />
          </Flex>
  );
};

export default Reservation;
