import { getFullUrl } from '@/pages/mypage/utils/url';
import SvgIcInstagram20 from '@/shared/assets/svg/IcInstagram20';
import SvgIcYoutube20 from '@/shared/assets/svg/IcYoutube20';
import InfoComponent from '@/shared/components/InfoComponent/InfoComponent';
import Text from '@/shared/components/Text/Text';
import { sprinkles } from '@/shared/styles/sprinkles.css';
import { mockMyTeacherData } from '../TabWrapper/mockData';

const TeacherContent = () => {
  const data = mockMyTeacherData;
  return (
    <div>
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
  );
};

export default TeacherContent;
