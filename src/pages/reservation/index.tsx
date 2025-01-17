import { useState } from 'react';
import InfoComponent from '@/pages/reservation/InfoComponent';
import Divider from '@/components/Divider';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Header from '@/components/Header';
import Text from '@/components/Text';
import { IcArrowRightGray0614, IcCheckcircleGray0524, IcCheckcircleMain0324, IcCheckGray0724 } from '@/assets/svg';
import { vars } from '@/styles/theme.css';
import BookerComponent from './BookerComponent';
import BottomButton from './BottomButton';
import TopImageComponent from './TopImageComponent';
import { headerStyle, reservationStyle } from './index.css';

const Reservation = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
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
          <div style={{ width: '100%' }}>
            <div
              onClick={handleToggle}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '1.2rem',
                border: '1px solid',
                borderColor: isChecked ? vars.colors.main04 : vars.colors.gray04,
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '4px',
                cursor: 'pointer',
                marginBottom: '0.4rem',
              }}>
              {isChecked ? <IcCheckcircleMain0324 height={24} /> : <IcCheckcircleGray0524 height={24} />}
              <Head level="h5" tag="h6">
                전체동의
              </Head>
            </div>

            <Flex direction="column" width="100%">
              <Flex
                width="100%"
                marginTop="0.8rem"
                paddingRight="0.8rem"
                paddingBottom="0.8rem"
                paddingLeft="0.8rem"
                justify="spaceBetween"
                align="center">
                <Flex gap="1.2rem">
                  <IcCheckGray0724 width={24} />
                  <Text tag="b2" color="gray7">
                    개인정보수집/이용 동의 (필수)
                  </Text>
                </Flex>
                <IcArrowRightGray0614 width={32} />
              </Flex>
              <Flex
                width="100%"
                paddingTop="0.8rem"
                paddingRight="0.8rem"
                paddingBottom="0.8rem"
                paddingLeft="0.8rem"
                justify="spaceBetween"
                align="center">
                <Flex gap="1.2rem">
                  <IcCheckGray0724 width={24} />
                  <Text tag="b2" color="gray7">
                    개인정보 제공 동의 (필수)
                  </Text>
                </Flex>
                <IcArrowRightGray0614 width={32} />
              </Flex>
              <Flex
                width="100%"
                paddingTop="0.8rem"
                paddingRight="0.8rem"
                paddingBottom="0.8rem"
                paddingLeft="0.8rem"
                justify="spaceBetween"
                align="center">
                <Flex gap="1.2rem">
                  <IcCheckGray0724 width={24} />
                  <Text tag="b2" color="gray7">
                    취소 및 환불 규칙 (필수)
                  </Text>
                </Flex>
                <IcArrowRightGray0614 width={32} />
              </Flex>
            </Flex>
          </div>
          <Text tag="b3" color="gray6" style={{paddingBottom:"4.2rem"}}>
            * 예약 서비스 이용을 위한 개인정보 수집 및 제 3자 제공, 취소/환불 규정을 확인하였으며 이에 동의합니다.
          </Text>
        </Flex>
        <Divider direction="horizontal" length="100%" thickness="0.1rem" />

      </Flex>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          padding: '1.8rem 2rem 1.6rem 2rem',
          alignItems:'center',
        }}>
        <Head level="h3" tag="h4" color="gray9">
          총 결제 금액
        </Head>
        <Head level="h2" tag="h2" color="main4">
          50,000원
        </Head>
      </div>
      <BottomButton />
    </Flex>
  );
};

export default Reservation;
