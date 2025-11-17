import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { expandInstagramUrl, expandYouTubeUrl } from '@/pages/dancer/utils/url';
import { useGetMyLessonThumbnails, useGetMyPage, useGetMyTeacherInfo } from '@/pages/mypage/apis/queries';
import BottomList from '@/pages/mypage/components/BottomList/BottomList';
import EmptyClassList from '@/pages/mypage/components/TabWrapper/components/TeacherContent/components/EmptyClassList/EmptyClassList';
import TeacherLessons from '@/pages/mypage/components/TabWrapper/components/TeacherContent/components/TeacherLessons/TeacherLessons';
import ToolTip from '@/pages/mypage/components/TabWrapper/components/TeacherContent/components/ToolTip/ToolTip';
import OverlayPage from '@/pages/mypage/components/TabWrapper/components/TeacherContent/components/ToolTip/components/OverlayPage';
import UnregisteredTeacher from '@/pages/mypage/components/TabWrapper/components/TeacherContent/components/UnregisteredTeacher/UnregisteredTeacher';
import * as styles from '@/pages/mypage/components/TabWrapper/components/TeacherContent/teacherContent.css';
import { VISIT_KEY } from '@/pages/mypage/constants/storageKey';
import { getUser } from '@/pages/mypage/utils/storage';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { useGetRole, useGetTeacherAccount } from '@/shared/apis/queries';
import IcArrowRightSmallGray0732 from '@/shared/assets/svg/IcArrowRightSmallGray0732';
import IcInstagram20 from '@/shared/assets/svg/IcInstagram20';
import IcPlusWhite24 from '@/shared/assets/svg/IcPlusWhite24';
import IcReview from '@/shared/assets/svg/IcReview';
import IcYoutube20 from '@/shared/assets/svg/IcYoutube20';
import Divider from '@/shared/components/Divider/Divider';
import InfoComponent from '@/shared/components/InfoComponent/InfoComponent';
import Text from '@/shared/components/Text/Text';
import { notify } from '@/shared/components/Toast/Toast';
import { sprinkles } from '@/shared/styles/sprinkles.css';

const TeacherContent = () => {
  const navigate = useNavigate();

  const isFirstVisit = getUser(VISIT_KEY) === null;
  const [showToolTip, setShowToopTip] = useState(isFirstVisit);

  const { data: role, isLoading: isGetRoleLoading } = useGetRole();
  const userRole = role?.role;

  const { data } = useGetMyTeacherInfo(userRole);
  const { data: lessonData } = useGetMyLessonThumbnails(userRole);
  const { data: myData } = useGetMyPage();
  const { data: accountData } = useGetTeacherAccount(userRole);
  const isRegisteredTeacherProfile = userRole === 'TEACHER';

  if (isGetRoleLoading) {
    return <div></div>;
  }

  if (!isRegisteredTeacherProfile && myData) {
    return (
      <div className={styles.containerStyle}>
        {isFirstVisit && (
          <>
            <OverlayPage isVisible={isFirstVisit} />
            <ToolTip title="강사 탭 이용 안내" isOpen={showToolTip} onClose={() => setShowToopTip(false)}>
              강사 탭을 열어 프로필을 등록하고
              <br /> 나만의 클래스를 열어보세요!
            </ToolTip>
          </>
        )}
        <div className={styles.topContainerStyle}>
          <UnregisteredTeacher name={myData.name} />
          <Divider color="gray1" thickness="0.4rem" />
        </div>
        <BottomList userRole="TEACHER" />
      </div>
    );
  }

  const handleClassButtonClick = () => {
    if (accountData?.isRegistered) {
      navigate(ROUTES_CONFIG.classRegister.path);
    } else {
      notify({ message: '클래스 개설 전 계좌를 먼저 등록해 주세요', icon: 'success', bottomGap: 'large' });
      navigate(ROUTES_CONFIG.accountRegister.path);
    }
  };

  const handleAllButtonClick = () => {
    navigate(ROUTES_CONFIG.instructorClassList.path);
  };

  const handleReviewClick = () => {
    notify({ message: '해당 기능은 추후 구현 예정이에요' });
  };

  if (!data || !lessonData) {
    return <div></div>;
  }

  return (
    <div className={styles.containerStyle}>
      <div className={styles.topContainerStyle}>
        <InfoComponent
          type="teacher"
          profileImageUrl={data.profileImage}
          mainText={<Text tag="b1_sb">{data.nickname}</Text>}
          subContent={
            <div className={sprinkles({ display: 'flex', alignItems: 'center', gap: 4 })}>
              {data.instagram && (
                <a
                  href={expandInstagramUrl(data.instagram)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={sprinkles({ display: 'flex', gap: 4, alignItems: 'center' })}>
                  <IcInstagram20 width={16} height={12} />
                  <Text tag="b3_m" color="gray6" className={styles.snsUrlStyle}>
                    {data.instagram}
                  </Text>
                </a>
              )}

              {data.instagram && data.youtube && (
                <Text tag="b3_m" color="gray6">
                  ·
                </Text>
              )}

              {data.youtube && (
                <a
                  href={expandYouTubeUrl(data.youtube)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={sprinkles({ display: 'flex', gap: 4, alignItems: 'center' })}>
                  <IcYoutube20 width={16} height={12} />
                  <Text tag="b3_m" color="gray6" className={styles.snsUrlStyle}>
                    {data.youtube}
                  </Text>
                </a>
              )}
            </div>
          }
        />
        <section>
          <div
            className={sprinkles({
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              px: 20,
            })}>
            <Text tag="b1_sb" color="black">
              내 클래스 목록
            </Text>
            {!!lessonData.lessons?.length && (
              <button className={styles.allButtonStyle} type="button" onClick={handleAllButtonClick}>
                모두 보기
              </button>
            )}
          </div>
          {lessonData.lessons?.length ? <TeacherLessons data={lessonData} /> : <EmptyClassList />}
        </section>
      </div>
      <Divider color="gray1" thickness="0.4rem" />
      <button type="button" className={styles.reviewContainerStyle} onClick={handleReviewClick}>
        <div className={sprinkles({ display: 'flex', alignItems: 'center', gap: 4 })}>
          <IcReview width={24} />
          <Text as="span" tag="b2_sb" color="gray11">
            리뷰 확인
          </Text>
        </div>
        <IcArrowRightSmallGray0732 width={32} />
      </button>
      <Divider color="gray1" thickness="0.4rem" />
      <BottomList userRole="TEACHER" />
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
