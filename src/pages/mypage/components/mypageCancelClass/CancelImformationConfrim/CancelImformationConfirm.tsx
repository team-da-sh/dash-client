import { useParams } from 'react-router-dom';
import { useGetReservationsDetail } from '@/pages/mypage/components/mypageReservationDetail/apis/queries';
import ApplicantInfo from '@/pages/reservation/components/ApplicantInfo/ApplicantInfo';
import ClassInfo from '@/pages/reservation/components/ClassInfo/ClassInfo';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import Head from '@/shared/components/Head/Head';
import { sprinkles } from '@/shared/styles/sprinkles.css';

const CancelImformationConfirm = () => {
  const handleConfirm = () => {
    // TODO: 취소 api 연동 + modal 추가
    window.location.href = '/mypage';
  };

  const { id } = useParams<{ id: string }>();

  const lessonId = Number(id);

  const { data } = useGetReservationsDetail(lessonId);

  if (!data) {
    return <div></div>;
  }

  return (
    <div
      className={sprinkles({
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-between',
      })}>
      <div
        className={sprinkles({
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          gap: 20,
          pt: 24,
          pr: 20,
          pl: 20,
        })}>
        <div className={sprinkles({ display: 'flex', gap: 4, alignItems: 'center', justifyContent: 'center', pb: 8 })}>
          <Head tag="h6_sb" color="black">
            해당 클래스 신청을
          </Head>
          <Head tag="h6_sb" color="main4">
            취소
          </Head>
          <Head tag="h6_sb" color="black">
            하시겠습니까?
          </Head>
        </div>
        <div className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 16 })}>
          <Head tag="h6_sb" color="black">
            신청자 정보
          </Head>
          <ApplicantInfo memberName={data.name} memberPhoneNumber={data.phoneNumber} />
        </div>

        <div className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 16 })}>
          <Head tag="h6_sb" color="black">
            클래스 정보
          </Head>
          <ClassInfo
            name={data.lessonName}
            location={data.location}
            locationDetail={data.detailedAddress}
            teacherNickname={data.nickname}
            level={data.level}
            lessonRound={data.rounds}
          />
        </div>
      </div>

      <div className={sprinkles({ pt: 20, pr: 20, pb: 20, pl: 20 })}>
        <BoxButton variant="primary" onClick={handleConfirm} className={sprinkles({ width: '100%' })}>
          취소하기
        </BoxButton>
      </div>
    </div>
  );
};

export default CancelImformationConfirm;
