import Card from '@/pages/class/Card';
import Flex from '@/components/Flex';
import Text from '@/components/Text';
import { LESSON_DATA } from '@/mocks/mockLessonData';
import { IcLocation60 } from '@/assets/svg';
import { streetAddressStyle, addressTitleStyle } from "@/pages/class/TabWrapper/TabLocation/index.css";

const LocationInfo = () => {
  const { lessonLocation, lessonStreetAddress, lessonOldStreetAddress } = LESSON_DATA;

  return (
    <Flex direction="column" justify="center" gap="1.2rem">
      <Card>
        <Flex align="center" justify="spaceBetween" gap="1.6rem" width="100%">
          {/* 왼쪽 */}
          <Flex direction="column" gap="0.6rem">
            <Text tag="b4" color="black">
              {lessonLocation}
            </Text>
            <Flex direction="column" gap="0.4rem">
              <Flex justify="spaceBetween">
                <Flex marginRight="0.4rem">
                  <Text tag="b7" color="gray6" className={addressTitleStyle}>
                    주소
                  </Text>
                </Flex>
                <Text tag="b7" color="gray7" className={streetAddressStyle}>
                  {lessonStreetAddress}
                </Text>
              </Flex>

              <Flex justify="spaceBetween">
                <Flex marginRight="0.4rem">
                  <Text tag="b7" color="gray6">
                    지번
                  </Text>
                </Flex>
                <Text tag="b7" color="gray7">
                  {lessonOldStreetAddress}
                </Text>
              </Flex>
            </Flex>
          </Flex>

          {/* 오른쪽 */}
          <IcLocation60 width={'6rem'} />
        </Flex>
      </Card>
    </Flex>
  );
};

export default LocationInfo;
