import { ChangeEvent } from 'react';
import { dividerStyle, locationListContainerStyle } from '@/pages/instructor/classRegister/ClassPlace/index.css';
import Description from '@/pages/instructor/classRegister/Description';
import Flex from '@/components/Flex';
import Input from '@/components/Input';
import Text from '@/components/Text';

interface Location {
  name: string;
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
}

const ClassPlace = ({
  defaultPlace,
  detailPlace,
  handleDefaultPlace,
  handleDetailPlace,
  handleSubmitDefaultPlace,
  locationList,
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
              {locationList.locations.map((location, idx) => (
                <>
                  {idx !== 0 && <div className={dividerStyle} />}
                  <Flex direction="column" width="100%">
                    <Text tag="b5" color="gray10">
                      {location.name}
                    </Text>
                    <Text tag="b9" color="gray5">
                      {location.streetAddress}
                    </Text>
                  </Flex>
                </>
              ))}
            </Flex>
          </Flex>
        )}
        <Input value={detailPlace} onChange={handleDetailPlace} />
      </Flex>
    </Flex>
  );
};

export default ClassPlace;
