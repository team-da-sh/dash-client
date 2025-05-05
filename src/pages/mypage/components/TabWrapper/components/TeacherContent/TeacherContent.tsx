import { useNavigate } from 'react-router-dom';
import BottomList from '@/pages/mypage/components/BottomList/BottomList';
import EmptyClassList from '@/pages/mypage/components/TabWrapper/components/TeacherContent/components/EmptyClassList/EmptyClassList';
import TeacherLessons from '@/pages/mypage/components/TabWrapper/components/TeacherContent/components/TeacherLessons/TeacherLessons';
import * as styles from '@/pages/mypage/components/TabWrapper/components/TeacherContent/teacherContent.css';
import { getUserRole } from '@/pages/mypage/utils/storage';
import { getFullUrl } from '@/pages/mypage/utils/url';
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
import { mockMyTeacherData, mockTeacherLessonData } from '../../mockData';
import UnregisteredTeacher from './components/UnregisteredTeacher/UnregisteredTeacher';

const TeacherContent = () => {
  const navigate = useNavigate();
  const data = mockMyTeacherData;
  const lessonData = mockTeacherLessonData;
  const userRole = getUserRole();

  const handleClassButtonClick = () => {
    navigate(ROUTES_CONFIG.classRegister.path);
  };

  let isUnregisteredTeacherProfile = userRole === 'STUDENT';

  return (
    <div className={styles.containerStyle}>
      <div className={styles.topContainerStyle}>
        {isUnregisteredTeacherProfile ? (
          <>
            <UnregisteredTeacher nickname={data.nickname} />
            <Divider color="gray1" thickness="0.4rem" />
          </>
        ) : (
          <>
            <InfoComponent
              profileImageUrl={data.profileImage}
              mainText={<Text tag="b1_sb">{data.nickname}</Text>}
              subContent={
                <div className={sprinkles({ display: 'flex', alignItems: 'center', gap: 4 })}>
                  <a
                    href={getFullUrl('instagram', data.instagram)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={sprinkles({ display: 'flex', gap: 4, alignItems: 'center' })}>
                    <IcInstagram20 width={16} height={12} />
                    <Text tag="b3_m" color="gray6">
                      {data.instagram}
                    </Text>
                  </a>

                  <Text tag="b3_m" color="gray6">
                    ·
                  </Text>
                  <div>
                    <a
                      href={getFullUrl('youtube', data.youtube)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={sprinkles({ display: 'flex', gap: 4, alignItems: 'center' })}>
                      <IcYoutube20 width={16} height={12} />
                      <Text tag="b3_m" color="gray6">
                        {data.youtube}
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
                <p>모두 보기</p>
              </div>
              {lessonData.lessons.length > 0 ? <TeacherLessons data={lessonData} /> : <EmptyClassList />}
            </section>
          </>
        )}
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
