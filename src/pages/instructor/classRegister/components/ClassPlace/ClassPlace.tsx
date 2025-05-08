import { type ChangeEvent } from 'react';
import type { UseFormRegister } from 'react-hook-form';
import * as styles from '@/pages/instructor/classRegister/components/ClassPlace/classPlace.css';
import Description from '@/pages/instructor/classRegister/components/Description';
import {
  CLASS_DEFAULT_PLACE_PLACEHOLDER,
  CLASS_DETAIL_PLACE_PLACEHOLDER,
  CLASS_PLACE_SUBTITLE,
} from '@/pages/instructor/classRegister/constants/registerSectionText';
import type { ClassRegisterFormTypes } from '@/pages/instructor/classRegister/types/classRegisterForm';
import type { LocationsData, LocationTypes } from '@/pages/instructor/classRegister/types/index';
import BtnCheck from '@/shared/assets/svg/BtnCheck';
import IcSearchGray from '@/shared/assets/svg/IcSearchGray';
import IcXCircleGray0424 from '@/shared/assets/svg/IcXCircleGray0424';
import Input from '@/shared/components/Input/Input';
import Text from '@/shared/components/Text/Text';
import { sprinkles } from '@/shared/styles/sprinkles.css';

interface ClassPlacePropTypes {
  register: UseFormRegister<ClassRegisterFormTypes>;
  isUndecidedLocation: boolean;
  defaultPlace: string;
  handleHasLocation: () => void;
  handleDefaultPlace: (e: ChangeEvent<HTMLInputElement>) => void;
  selectedLocation: LocationTypes | null;
  locationList: LocationsData;
  setSelectedLocation: (location: LocationTypes | null) => void;
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
}: ClassPlacePropTypes) => {
  const shouldShowEmptyMessage = Array.isArray(locationList?.locations) && locationList.locations.length === 0;
  const shouldShowLocationList = Array.isArray(locationList?.locations) && locationList.locations.length > 0;

  const { onChange, ref, name } = register('detailedAddress');

  return (
    <div
      className={sprinkles({
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        gap: 20,
        mb: 40,
      })}>
      <div className={sprinkles({ display: 'flex', width: '100%', justifyContent: 'space-between' })}>
        <Description title="클래스 장소" subTitle={CLASS_PLACE_SUBTITLE} />
        <div className={styles.checkboxContainerStyle}>
          <Text tag="b3_m" color="gray8">
            장소 미정
          </Text>
          {isUndecidedLocation ? (
            <BtnCheck width={'2rem'} onClick={handleHasLocation} />
          ) : (
            <div className={styles.checkboxStyle} onClick={handleHasLocation} />
          )}
        </div>
      </div>

      {!isUndecidedLocation && (
        <div className={sprinkles({ display: 'flex', width: '100%', flexDirection: 'column', gap: 8 })}>
          {selectedLocation ? (
            <div className={styles.selectedLocationContainerStyle}>
              <Text tag="b2_sb_long">{selectedLocation.location}</Text>
              <IcXCircleGray0424 width={'2.4rem'} onClick={() => setSelectedLocation(null)} />
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
                <div className={styles.locationEmptyContainerStyle}>해당 검색어에 대한 검색 결과가 없어요!</div>
              )}

              {shouldShowLocationList && (
                <div className={styles.locationListContainerStyle}>
                  <div className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 10 })}>
                    {locationList.locations.map((item, idx) => (
                      <div
                        key={idx}
                        onClick={() => setSelectedLocation(item)}
                        className={styles.locationItemContainerStyle}>
                        {idx !== 0 && <div className={styles.dividerStyle} />}
                        <div className={sprinkles({ display: 'flex', flexDirection: 'column', width: '100%' })}>
                          <Text tag="b2_sb_long" color="gray10">
                            {item.location}
                          </Text>
                          <Text tag="b3_sb" color="gray5">
                            {item.streetAddress}
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
  );
};

export default ClassPlace;
