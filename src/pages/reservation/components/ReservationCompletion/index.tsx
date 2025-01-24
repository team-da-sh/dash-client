import { useNavigate } from 'react-router-dom';
import {
  buttonContainerStyle,
  clearStyle,
  flexCustomStyle,
  funnelContainerStyle,
  buttonStyle,
} from '@/pages/reservation/components/ReservationCompletion/index.css';
import BoxButton from '@/components/BoxButton';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Header from '@/components/Header';
import Text from '@/components/Text';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { ClearGif } from '@/assets/gif';

const ReservationCompletion = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header.Root isColor={true}>
        <Header.CloseIcon
          onClick={() => {
            navigate(ROUTES_CONFIG.home.path);
          }}
        />
      </Header.Root>
      <Flex className={funnelContainerStyle}>
        <Flex direction="column" gap="0.8rem" width="100%" className={flexCustomStyle}>
          <Flex direction="column">
            <Head level="h1" tag="h2">
              클래스 신청 완료! <br />
              함께 리듬 탈 준비 됐나요?
            </Head>
          </Flex>
          <Flex direction="column" gap="0.6rem">
            <Text tag="b2" color="gray7">
              신청 내역은 마이페이지의
            </Text>
            <Text tag="b2" color="gray7">
              수업 신청 내역에서 확인할 수 있어요
            </Text>
          </Flex>

          <img src={ClearGif} alt="완료 페이지 캐릭터" className={clearStyle} />
        </Flex>
      </Flex>
      <div className={buttonContainerStyle}>
        <BoxButton
          onClick={() => {
            navigate(ROUTES_CONFIG.mypageReservation.path);
          }}>
          <Head level="h5" tag="h6" className={buttonStyle}>
            신청 내역으로 이동
          </Head>
        </BoxButton>
      </div>
    </>
  );
};

export default ReservationCompletion;
