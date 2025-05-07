import type { UseFormRegister } from 'react-hook-form';
import Description from '@/pages/instructorRegister/components/Description/Description';
import { textAreaContainerStyle } from '@/pages/instructorRegister/components/PersonalSNSSection/personalSNSSection.css';
import Input from '@/shared/components/Input/Input';
import Text from '@/shared/components/Text/Text';
import { sprinkles } from '@/shared/styles/sprinkles.css';
import type { instructorRegisterFormTypes } from '../../types/instructorRegisterForm';

interface PersonalSNSSectionPropTypes {
  instagram?: string;
  youtube?: string;
  register: UseFormRegister<instructorRegisterFormTypes>;
}
const PersonalSNSSection = ({ instagram, youtube, register }: PersonalSNSSectionPropTypes) => {
  const { ref: instagramRef, onChange: instagramOnChange, name: instagramName } = register('instagram');
  const { ref: youtubeRef, onChange: youtubeOnChange, name: youtubeName } = register('youtube');

  return (
    <section className={sprinkles({ width: '100%', flexDirection: 'column', pb: 20 })}>
      <Description title="개인 SNS 등록" subTitle="두 항목 중 하나는 반드시 입력해 주세요" />

      <div className={sprinkles({ flexDirection: 'column', width: '100%' })}>
        <div className={textAreaContainerStyle}>
          <Text tag="b2_sb">인스타그램</Text>
          <Input
            ref={instagramRef}
            onChange={instagramOnChange}
            name={instagramName}
            value={instagram}
            placeholder="dashdash.kr"
          />
        </div>

        <div className={textAreaContainerStyle}>
          <Text tag="b2_sb">유튜브 채널</Text>
          <Input
            ref={youtubeRef}
            onChange={youtubeOnChange}
            name={youtubeName}
            value={youtube}
            placeholder="dashofficial"
          />
        </div>
      </div>
    </section>
  );
};

export default PersonalSNSSection;
