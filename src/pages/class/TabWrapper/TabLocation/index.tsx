import Card from '@/pages/class/Card';
import { streetAddressStyle, addressTitleStyle } from '@/pages/class/TabWrapper/TabLocation/index.css';
import { emptyStyle } from '@/pages/class/TabWrapper/TabLocation/index.css';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Text from '@/components/Text';
import { IcLocation60 } from '@/assets/svg';
import { LESSON_DATA } from '@/mocks/mockLessonData';

const TabLocation = () => {
  const { lessonLocation, lessonStreetAddress, lessonOldStreetAddress } = LESSON_DATA;

  const isEmpty = !lessonLocation || !lessonStreetAddress || !lessonOldStreetAddress;

  return (
    <Flex direction="column" justify="center" gap="1.2rem">
      {isEmpty ? (
        <Head level="h5" tag="h6" color="gray9" className={emptyStyle}>
          아직 장소가 등록되지 않은 클래스예요
        </Head>
      ) : (
        <Card>
          <Flex align="center" justify="spaceBetween" gap="1.6rem" width="100%">
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

            <IcLocation60 width={'6rem'} />
          </Flex>
        </Card>
      )}
    </Flex>
  );
};

export default TabLocation;
