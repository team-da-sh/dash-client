import type { ChangeEvent } from 'react';
import {
  checkboxContainerStyle,
  checkboxStyle,
  dividerStyle,
  locationItemContainerStyle,
  locationListContainerStyle,
  selectedLocationContainerStyle,
} from '@/pages/instructor/classRegister/components/ClassPlace/classPlace.css';
import Description from '@/pages/instructor/classRegister/components/Description';
import BtnCheck from '@/shared/assets/svg/BtnCheck';
import IcSearchGray from '@/shared/assets/svg/IcSearchGray';
import IcXCircleGray0424 from '@/shared/assets/svg/IcXCircleGray0424';
import Input from '@/shared/components/Input/Input';
import Text from '@/shared/components/Text/Text';
import { sprinkles } from '@/shared/styles/sprinkles.css';
import type { LocationsData, LocationTypes } from '../../types';

interface ClassPlacePropTypes {
  hasLocation: boolean;
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
  hasLocation,
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
        <Description title="클래스 장소" subTitle="클래스가 진행될 장소를 알려주세요" />
        <div className={checkboxContainerStyle}>
          <Text tag="b3_m" color="gray8">
            장소 미정
          </Text>
          {hasLocation ? (
            <div className={checkboxStyle} onClick={handleHasLocation} />
          ) : (
            <BtnCheck width={'2rem'} onClick={handleHasLocation} />
          )}
        </div>
      </div>

      {hasLocation && (
        <div className={sprinkles({ display: 'flex', width: '100%', flexDirection: 'column', gap: 8 })}>
          {selectedLocation ? (
            <div className={selectedLocationContainerStyle}>
              <Text>{selectedLocation.location}</Text>
              <IcXCircleGray0424 width={'2.4rem'} onClick={() => setSelectedLocation(null)} />
            </div>
          ) : (
            <>
              <Input
                value={defaultPlace}
                onChange={handleDefaultPlace}
                placeholder="지번, 도로명, 건물명으로 검색해 주세요"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                  }
                }}
                rightAddOn={<IcSearchGray width={'2.4rem'} onClick={() => handleSubmitDefaultPlace()} />}
              />

              {locationList && (
                <div className={locationListContainerStyle}>
                  <div className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 10 })}>
                    {locationList.locations.map((item, idx) => (
                      <div key={idx} onClick={() => setSelectedLocation(item)} className={locationItemContainerStyle}>
                        {idx !== 0 && <div className={dividerStyle} />}
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

          <Input
            value={detailPlace}
            onChange={handleDetailPlace}
            placeholder="건물명, 층 수 등의 상세 주소를 입력해 주세요"
          />
        </div>
      )}
    </div>
  );
};

export default ClassPlace;
