import { useNavigate } from 'react-router-dom';
import { extractInstaHandleFromUrl, extractYouTubeHandleFromUrl } from '@/pages/dancer/utils/url';
import { useGetMyTeacherInfo, useGetMyLessonThumbnails, useGetMyPage } from '@/pages/mypage/apis/queries';
import BottomList from '@/pages/mypage/components/BottomList/BottomList';
import EmptyClassList from '@/pages/mypage/components/TabWrapper/components/TeacherContent/components/EmptyClassList/EmptyClassList';
import TeacherLessons from '@/pages/mypage/components/TabWrapper/components/TeacherContent/components/TeacherLessons/TeacherLessons';
import UnregisteredTeacher from '@/pages/mypage/components/TabWrapper/components/TeacherContent/components/UnregisteredTeacher/UnregisteredTeacher';
import * as styles from '@/pages/mypage/components/TabWrapper/components/TeacherContent/teacherContent.css';
import { getUserRole } from '@/pages/mypage/utils/storage';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import IcArrowRightSmallGray0732 from '@/shared/assets/svg/IcArrowRightSmallGray0732';
import IcInstagram20 from '@/shared/assets/svg/IcInstagram20';
import IcPlusWhite24 from '@/shared/assets/svg/IcPlusWhite24';
import IcReview from '@/shared/assets/svg/IcReview';
import IcYoutube20 from '@/shared/assets/svg/IcYoutube20';
import Divider from '@/shared/components/Divider/Divider';
import InfoComponent from '@/shared/components/InfoComponent/InfoComponent';
import Text from '@/shared/components/Text/Text';
import { sprinkles } from '@/shared/styles/sprinkles.css';

const TeacherContent = () => {
  const navigate = useNavigate();
  const userRole = getUserRole();

  const { data: myData } = useGetMyPage();
  const { data } = useGetMyTeacherInfo();
  console.log(data);

  const { data: lessonData } = useGetMyLessonThumbnails();

  let isRegisteredTeacherProfile = userRole === 'TEACHER';

  if (!isRegisteredTeacherProfile && myData) {
    return (
      <div className={styles.containerStyle}>
        <div className={styles.topContainerStyle}>
          <UnregisteredTeacher nickname={myData.nickname} />
          <Divider color="gray1" thickness="0.4rem" />
        </div>
        <BottomList />
      </div>
    );
  }

  const handleClassButtonClick = () => {
    navigate(ROUTES_CONFIG.classRegister.path);
  };

  const handleAllButtonClick = () => {
    navigate(ROUTES_CONFIG.instructorClassList.path);
  };

  if (!data || !lessonData) {
    return <div></div>;
  }

  return (
    <div className={styles.containerStyle}>
      <div className={styles.topContainerStyle}>
        <InfoComponent
          profileImageUrl={data.profileImage}
          mainText={<Text tag="b1_sb">{data.nickname}</Text>}
          subContent={
            <div className={sprinkles({ display: 'flex', alignItems: 'center', gap: 4 })}>
              <a
                href={data.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={sprinkles({ display: 'flex', gap: 4, alignItems: 'center' })}>
                <IcInstagram20 width={16} height={12} />
                <Text tag="b3_m" color="gray6">
                  {extractInstaHandleFromUrl(data.instagram)}
                </Text>
              </a>

              <Text tag="b3_m" color="gray6">
                ·
              </Text>
              <div>
                <a
                  href={data.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={sprinkles({ display: 'flex', gap: 4, alignItems: 'center' })}>
                  <IcYoutube20 width={16} height={12} />
                  <Text tag="b3_m" color="gray6">
                    {extractYouTubeHandleFromUrl(data.youtube)}
                  </Text>
                </a>
              </div>
            </div>
          }
        />
        <section>
          <div
            className={sprinkles({
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 20,
            })}>
            <Text tag="b1_sb" color="black">
              내 클래스 목록
            </Text>
            <button className={styles.allButtonStyle} type="button" onClick={handleAllButtonClick}>
              모두 보기
            </button>
          </div>
          {lessonData.lessons?.length ? <TeacherLessons data={lessonData} /> : <EmptyClassList />}
        </section>
      </div>
      <div className={styles.reviewContainerStyle}>
        <div className={sprinkles({ display: 'flex', alignItems: 'center', gap: 4 })}>
          <IcReview width={24} />
          <Text tag="b2_sb" color="gray11">
            리뷰 확인
          </Text>
        </div>
        <IcArrowRightSmallGray0732 width={32} />
      </div>
      <Divider color="gray1" thickness="0.4rem" />
      <BottomList />
      <button type="button" className={styles.classButtonStyle} onClick={handleClassButtonClick}>
        <IcPlusWhite24 width={24} />
        <Text tag="b1_sb_long" color="white">
          클래스 개설
        </Text>
      </button>
    </div>
  );
};

export default TeacherContent;
