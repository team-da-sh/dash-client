import Card from '@/pages/class/components/Card';
import { streetAddressStyle, addressTitleStyle } from '@/pages/class/components/TabWrapper/TabLocation/index.css';
import { emptyStyle } from '@/pages/class/components/TabWrapper/TabLocation/index.css';
import { LessonDetailApiResponse } from '@/pages/class/types/index';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Text from '@/components/Text';
import { IcLocation60 } from '@/assets/svg';

const TabLocation = ({ lessonData }: { lessonData: LessonDetailApiResponse }) => {
  const { location, streetAddress, streetDetailAddress, oldStreetAddress } = lessonData;

  const isEmpty = !location || !streetAddress || !oldStreetAddress;

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
                {location}
              </Text>
              <Flex direction="column" gap="0.4rem">
                <Flex justify="spaceBetween">
                  <Flex marginRight="0.4rem">
                    <Text tag="b7" color="gray6" className={addressTitleStyle}>
                      주소
                    </Text>
                  </Flex>
                  <Flex direction="column">
                    <Text tag="b7" color="gray7" className={streetAddressStyle}>
                      {streetAddress}
                    </Text>
                    <Text tag="b7" color="gray7" className={streetAddressStyle}>
                      {streetDetailAddress}
                    </Text>
                  </Flex>
                </Flex>

                <Flex justify="spaceBetween">
                  <Flex marginRight="0.4rem">
                    <Text tag="b7" color="gray6" className={addressTitleStyle}>
                      지번
                    </Text>
                  </Flex>
                  <Text tag="b7" color="gray7">
                    {oldStreetAddress}
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
