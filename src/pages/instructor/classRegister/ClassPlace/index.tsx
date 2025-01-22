import { ChangeEvent } from 'react';
import { dividerStyle, locationListContainerStyle } from '@/pages/instructor/classRegister/ClassPlace/index.css';
import Description from '@/pages/instructor/classRegister/Description';
import Flex from '@/components/Flex';
import Input from '@/components/Input';
import Text from '@/components/Text';

interface Location {
  location: string;
  streetAddress: string;
  oldStreetAddress: string;
}

interface LocationsData {
  locations: Location[];
}

interface ClassPlaceProps {
  defaultPlace: string;
  detailPlace: string;
  handleDefaultPlace: (e: ChangeEvent<HTMLInputElement>) => void;
  handleDetailPlace: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmitDefaultPlace: () => void;
  locationList: LocationsData;
  setSelectedLocation: (location: Location) => void;
}

const ClassPlace = ({
  defaultPlace,
  detailPlace,
  handleDefaultPlace,
  handleDetailPlace,
  handleSubmitDefaultPlace,
  locationList,
  setSelectedLocation,
}: ClassPlaceProps) => {
  console.log(locationList);
  return (
    <Flex tag="section" direction="column" gap="2rem" width="100%" marginBottom="4rem">
      <Description title="클래스 장소" subTitle="클래스가 진행될 장소를 알려주세요" />
      <Flex width="100%" direction="column" gap="0.8rem">
        <Input value={defaultPlace} onChange={handleDefaultPlace} />
        <button onClick={() => handleSubmitDefaultPlace()}>버튼</button>
        {locationList && (
          <Flex direction="column" gap="1rem" className={locationListContainerStyle}>
            <Flex direction="column" gap="1rem" width="100%">
              {locationList.locations.map((item, idx) => (
                <div key={idx} onClick={() => setSelectedLocation(item)} style={{ cursor: 'pointer' }}>
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
    </Flex>
  );
};

export default ClassPlace;
