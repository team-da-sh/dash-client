import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import Description from '@/pages/instructorRegister/components/Description/Description';
import {
  textAreaContainerStyle,
  containerStyle,
  prefixIconStyle,
  inputStyle,
  sectionStyle,
  inputWrapperStyle,
} from '@/pages/instructorRegister/components/PersonalSNSSection/personalSNSSection.css';
import Text from '@/common/components/Text/Text';
import SvgIcAt12 from '@/shared/assets/svg/IcAt12';
import { vars } from '@/shared/styles/theme.css';
import { INSTRUCTOR_REGISTER_PLACEHOLDER } from '../../constants/registerSection';

const PersonalSNSSection = () => {
  const [isInstagramFocused, setIsInstagramFocused] = useState(false);
  const [isYoutubeFocused, setIsYoutubeFocused] = useState(false);

  const { register, watch } = useFormContext();
  const instagram = watch('instagram');
  const youtube = watch('youtube');

  const handleInstagramFocus = () => setIsInstagramFocused(true);
  const handleInstagramBlur = () => setIsInstagramFocused(false);
  const handleYoutubeFocus = () => setIsYoutubeFocused(true);
  const handleYoutubeBlur = () => setIsYoutubeFocused(false);

  const { ref: instagramRef, onChange: instagramOnChange, name: instagramName } = register('instagram');
  const { ref: youtubeRef, onChange: youtubeOnChange, name: youtubeName } = register('youtube');

  return (
    <section className={sectionStyle}>
      <Description title="개인 SNS 등록" subTitle="두 항목 중 하나는 반드시 입력해 주세요" />

      <div className={inputWrapperStyle}>
        <div className={textAreaContainerStyle}>
          <Text tag="b2_sb">인스타그램</Text>
          <div className={containerStyle({ isFocused: isInstagramFocused })}>
            {isInstagramFocused || instagram ? (
              <div className={prefixIconStyle}>
                <SvgIcAt12 width={'1.2rem'} height={'1.2rem'} style={{ display: 'block' }} />
              </div>
            ) : (
              <div className={prefixIconStyle}>
                <SvgIcAt12 width={'1.2rem'} height={'1.2rem'} fill={vars.colors.gray05} style={{ display: 'block' }} />
              </div>
            )}
            <input
              ref={instagramRef}
              type="text"
              name={instagramName}
              className={inputStyle}
              onChange={instagramOnChange}
              onFocus={handleInstagramFocus}
              onBlur={handleInstagramBlur}
              value={instagram}
              placeholder={INSTRUCTOR_REGISTER_PLACEHOLDER.INSTAGRAM}
            />
          </div>
        </div>

        <div className={textAreaContainerStyle}>
          <Text tag="b2_sb">유튜브 채널</Text>
          <div className={containerStyle({ isFocused: isYoutubeFocused })}>
            {isYoutubeFocused || youtube ? (
              <div className={prefixIconStyle}>
                <SvgIcAt12 width={'1.2rem'} height={'1.2rem'} style={{ display: 'block' }} />
              </div>
            ) : (
              <div className={prefixIconStyle}>
                <SvgIcAt12 width={'1.2rem'} height={'1.2rem'} fill={vars.colors.gray05} style={{ display: 'block' }} />
              </div>
            )}
            <input
              ref={youtubeRef}
              type="text"
              name={youtubeName}
              className={inputStyle}
              onChange={youtubeOnChange}
              onFocus={handleYoutubeFocus}
              onBlur={handleYoutubeBlur}
              value={youtube}
              placeholder={INSTRUCTOR_REGISTER_PLACEHOLDER.YOUTUBE}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalSNSSection;
