import { type ChangeEvent } from 'react';
import type { UseFormRegister } from 'react-hook-form';
import { useFormContext } from 'react-hook-form';
import {
  checkboxContainerStyle,
  checkboxStyle,
  selectedLocationContainerStyle,
  locationEmptyContainerStyle,
  locationListContainerStyle,
  locationItemContainerStyle,
  dividerStyle,
  containerStyle,
  contentWrapperStyle,
  headerWrapperStyle,
  locationInputWrapperStyle,
  locationListStyle,
  locationItemWrapperStyle,
  errorMessageStyle,
} from '@/pages/instructor/classRegister/components/ClassPlace/classPlace.css';
import Description from '@/pages/instructor/classRegister/components/Description';
import {
  CLASS_DEFAULT_PLACE_PLACEHOLDER,
  CLASS_DETAIL_PLACE_PLACEHOLDER,
  CLASS_PLACE_SUBTITLE,
} from '@/pages/instructor/classRegister/constants/registerSectionText';
import type { ClassRegisterFormTypes } from '@/pages/instructor/classRegister/types/classRegisterForm';
import type { LocationsData, LocationTypes } from '@/pages/instructor/classRegister/types/index';
import Input from '@/common/components/Input/Input';
import Text from '@/common/components/Text/Text';
import BtnCheck from '@/shared/assets/svg/BtnCheck';
import IcSearchGray from '@/shared/assets/svg/IcSearchGray';
import IcXCircleGray0424 from '@/shared/assets/svg/IcXCircleGray0424';

interface ClassPlacePropTypes {
  register: UseFormRegister<ClassRegisterFormTypes>;
  isUndecidedLocation: boolean;
  defaultPlace: string;
  handleHasLocation: () => void;
  handleDefaultPlace: (e: ChangeEvent<HTMLInputElement>) => void;
  selectedLocation: LocationTypes | null;
  locationList: LocationsData;
  setSelectedLocation: (location: LocationTypes | null) => void;
  handleRemoveLocation: () => void;
}

const ClassPlace = ({
  register,
  isUndecidedLocation,
  defaultPlace,
  handleHasLocation,
  handleDefaultPlace,
  selectedLocation,
  locationList,
  setSelectedLocation,
  handleRemoveLocation,
}: ClassPlacePropTypes) => {
  const shouldShowEmptyMessage = Array.isArray(locationList?.locations) && locationList.locations.length === 0;
  const shouldShowLocationList =
    Array.isArray(locationList?.locations) && locationList.locations.length > 0 && defaultPlace.trim() !== '';
  const {
    formState: { errors },
  } = useFormContext();
  const error = errors.selectedLocation as { message?: string } | undefined;

  const { onChange, ref, name } = register('detailedAddress');

  return (
    <div className={containerStyle}>
      <div className={contentWrapperStyle}>
        <div className={headerWrapperStyle}>
          <Description title="클래스 장소" subTitle={CLASS_PLACE_SUBTITLE} />
          <div className={checkboxContainerStyle}>
            <Text tag="b3_m" color="gray8">
              장소 미정
            </Text>
            {isUndecidedLocation ? (
              <BtnCheck width={'2rem'} onClick={handleHasLocation} />
            ) : (
              <div className={checkboxStyle} onClick={handleHasLocation} />
            )}
          </div>
        </div>

        {!isUndecidedLocation && (
          <div className={locationInputWrapperStyle}>
            {selectedLocation ? (
              <div className={selectedLocationContainerStyle}>
                <Text tag="b2_sb_long">{selectedLocation.location}</Text>
                <IcXCircleGray0424 width={'2.4rem'} onClick={handleRemoveLocation} />
              </div>
            ) : (
              <>
                <Input
                  value={defaultPlace}
                  onChange={handleDefaultPlace}
                  placeholder={CLASS_DEFAULT_PLACE_PLACEHOLDER}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                    }
                  }}
                  rightAddOn={<IcSearchGray width={'2.4rem'} />}
                />

                {shouldShowEmptyMessage && (
                  <div className={locationEmptyContainerStyle}>해당 검색어에 대한 검색 결과가 없어요!</div>
                )}

                {shouldShowLocationList && (
                  <div className={locationListContainerStyle}>
                    <div className={locationListStyle}>
                      {locationList.locations.map((location, idx) => (
                        <div
                          key={idx}
                          onClick={() => setSelectedLocation(location)}
                          className={locationItemContainerStyle}>
                          {idx !== 0 && <div className={dividerStyle} />}
                          <div className={locationItemWrapperStyle}>
                            <Text tag="b2_sb_long" color="gray10">
                              {location.location}
                            </Text>
                            <Text tag="b3_sb" color="gray5">
                              {location.streetAddress}
                            </Text>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}

            <Input onChange={onChange} name={name} ref={ref} placeholder={CLASS_DETAIL_PLACE_PLACEHOLDER} />
          </div>
        )}
      </div>
      {error?.message && (
        <div className={errorMessageStyle}>
          <Text tag="b3_r" color="alert3">
            {error.message}
          </Text>
        </div>
      )}
    </div>
  );
};

export default ClassPlace;
