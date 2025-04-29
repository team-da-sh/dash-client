import BottomList from '@/pages/mypage/components/BottomList/BottomList';
import * as styles from '@/pages/mypage/components/TeacherContent/teacherContent.css';
import TeacherLessons from '@/pages/mypage/components/TeacherLessons/TeacherLessons';
import { getFullUrl } from '@/pages/mypage/utils/url';
import SvgIcArrowRightSmallGray0732 from '@/shared/assets/svg/IcArrowRightSmallGray0732';
import SvgIcInstagram20 from '@/shared/assets/svg/IcInstagram20';
import SvgIcYoutube20 from '@/shared/assets/svg/IcYoutube20';
import Divider from '@/shared/components/Divider/Divider';
import InfoComponent from '@/shared/components/InfoComponent/InfoComponent';
import Text from '@/shared/components/Text/Text';
import { sprinkles } from '@/shared/styles/sprinkles.css';
import { mockMyTeacherData } from '../TabWrapper/mockData';

const TeacherContent = () => {
  const data = mockMyTeacherData;
  return (
    <div className={styles.containerStyle}>
      <div className={styles.topContainerStyle}>
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
                <SvgIcInstagram20 className={sprinkles({ width: 16, height: 16 })} />
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
                  <SvgIcYoutube20 className={sprinkles({ width: 16, height: 12 })} />
                  <Text tag="b3_m" color="gray6">
                    {data.youtube}
                  </Text>
                </a>
              </div>
            </div>
          }
        />
      </div>
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
        <TeacherLessons />
      </section>
      <div className={styles.reviewContainerStyle}>
        <div className={sprinkles({ display: 'flex', alignItems: 'center' })}>
          <SvgIcArrowRightSmallGray0732 width={32} />
          <Text tag="b2_sb" color="gray11">
            리뷰 확인
          </Text>
        </div>
        <SvgIcArrowRightSmallGray0732 width={32} />
      </div>
      <Divider color="gray1" thickness="0.4rem" />
      <BottomList />
    </div>
  );
};

export default TeacherContent;
