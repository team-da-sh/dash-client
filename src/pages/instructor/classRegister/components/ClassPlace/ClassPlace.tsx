import { useEffect, type ChangeEvent } from 'react';
import * as styles from '@/pages/instructor/classRegister/components/ClassPlace/classPlace.css';
import Description from '@/pages/instructor/classRegister/components/Description';
import {
  CLASS_DEFAULT_PLACE_PLACEHOLDER,
  CLASS_DETAIL_PLACE_PLACEHOLDER,
  CLASS_PLACE_SUBTITLE,
} from '@/pages/instructor/classRegister/constants/registerSection';
import BtnCheck from '@/shared/assets/svg/BtnCheck';
import IcSearchGray from '@/shared/assets/svg/IcSearchGray';
import IcXCircleGray0424 from '@/shared/assets/svg/IcXCircleGray0424';
import Input from '@/shared/components/Input/Input';
import Text from '@/shared/components/Text/Text';
import { sprinkles } from '@/shared/styles/sprinkles.css';
import type { LocationsData, LocationTypes } from '../../types';

interface ClassPlacePropTypes {
  isUndecidedLocation: boolean;
  defaultPlace: string;
  detailPlace: string;
  handleHasLocation: () => void;
  handleDefaultPlace: (e: ChangeEvent<HTMLInputElement>) => void;
  handleDetailPlace: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmitDefaultPlace: () => void;
  selectedLocation: LocationTypes | null;
  locationList: LocationsData;
  setSelectedLocation: (location: LocationTypes | null) => void;
}

const ClassPlace = ({
  isUndecidedLocation,
  defaultPlace,
  detailPlace,
  handleHasLocation,
  handleDefaultPlace,
  handleDetailPlace,
  handleSubmitDefaultPlace,
  selectedLocation,
  locationList,
  setSelectedLocation,
}: ClassPlacePropTypes) => {
  useEffect(() => {
    console.log(isUndecidedLocation);
  }, [isUndecidedLocation]);

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
              <Text>{selectedLocation.location}</Text>
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
                rightAddOn={<IcSearchGray width={'2.4rem'} onClick={() => handleSubmitDefaultPlace()} />}
              />

              {locationList && (
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

          <Input value={detailPlace} onChange={handleDetailPlace} placeholder={CLASS_DETAIL_PLACE_PLACEHOLDER} />
        </div>
      )}
    </div>
  );
};

export default ClassPlace;
