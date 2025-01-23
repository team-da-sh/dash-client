import { ChangeEvent } from 'react';
import {
  checkboxContainerStyle,
  checkboxStyle,
  dividerStyle,
  locationItemContainerStyle,
  locationListContainerStyle,
  searchInputContainerStyle,
  searchInputIconStyle,
} from '@/pages/instructor/classRegister/ClassPlace/index.css';
import Description from '@/pages/instructor/classRegister/Description';
import Flex from '@/components/Flex';
import Input from '@/components/Input';
import Text from '@/components/Text';
import { BtnCheck, IcSearchGray } from '@/assets/svg';

interface Location {
  location: string;
  streetAddress: string;
  oldStreetAddress: string;
}

interface LocationsData {
  locations: Location[];
}

interface ClassPlaceProps {
  hasLocation: boolean;
  defaultPlace: string;
  detailPlace: string;
  handleHasLocation: () => void;
  handleDefaultPlace: (e: ChangeEvent<HTMLInputElement>) => void;
  handleDetailPlace: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmitDefaultPlace: () => void;
  locationList: LocationsData;
  setSelectedLocation: (location: Location) => void;
}

const ClassPlace = ({
  hasLocation,
  defaultPlace,
  detailPlace,
  handleHasLocation,
  handleDefaultPlace,
  handleDetailPlace,
  handleSubmitDefaultPlace,
  locationList,
  setSelectedLocation,
}: ClassPlaceProps) => {
  return (
    <Flex tag="section" direction="column" gap="2rem" width="100%" marginBottom="4rem">
      <Flex justify="spaceBetween" width="100%">
        <Description title="클래스 장소" subTitle="클래스가 진행될 장소를 알려주세요" />
        <Flex align="center" gap="0.8rem" className={checkboxContainerStyle}>
          <Text tag="b7" color="gray8">
            장소 미정
          </Text>
          {hasLocation ? (
            <div className={checkboxStyle} onClick={handleHasLocation} />
          ) : (
            <BtnCheck width={'2rem'} onClick={handleHasLocation} />
          )}
        </Flex>
      </Flex>
      {hasLocation && (
        <Flex width="100%" direction="column" gap="0.8rem">
          <div className={searchInputContainerStyle}>
            <Input
              value={defaultPlace}
              onChange={handleDefaultPlace}
              placeholder="지번, 도로명, 건물명으로 검색해 주세요"
            />
            {/* {defaultPlace ? (
            <IcXCircleGray0424 width={'2.4rem'} className={searchInputIconStyle} />
          ) : ( */}
            <IcSearchGray
              width={'2.4rem'}
              className={searchInputIconStyle}
              onClick={() => handleSubmitDefaultPlace()}
            />
            {/* )} */}
          </div>

          {/* <button onClick={() => handleSubmitDefaultPlace()}>버튼</button> */}
          {locationList && (
            <Flex direction="column" gap="1rem" className={locationListContainerStyle}>
              <Flex direction="column" gap="1rem" width="100%">
                {locationList.locations.map((item, idx) => (
                  <div key={idx} onClick={() => setSelectedLocation(item)} className={locationItemContainerStyle}>
                    {idx !== 0 && <div className={dividerStyle} />}
                    <Flex direction="column" width="100%">
                      <Text tag="b5" color="gray10">
                        {item.location}
                      </Text>
                      <Text tag="b9" color="gray5">
                        {item.streetAddress}
                      </Text>
                    </Flex>
                  </div>
                ))}
              </Flex>
            </Flex>
          )}
          <Input
            value={detailPlace}
            onChange={handleDetailPlace}
            placeholder="건물명, 층 수 등의 상세 주소를 입력해 주세요"
          />
        </Flex>
      )}
    </Flex>
  );
};

export default ClassPlace;
