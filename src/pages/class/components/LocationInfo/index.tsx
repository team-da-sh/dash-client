import React from 'react';
import Card from '@/pages/class/components/Card';
import Flex from '@/components/Flex';
import Text from '@/components/Text';
import { IcClose } from '@/assets/svg';

type LocationData = {
  location: string;
  address: string;
  jibun: string;
};

const LocationInfo = () => {
  const data: LocationData[] = [
    {
      location: '로제이 댄스홀 합정점',
      address: '서울특별시 마포구 잔다리로 3길 31\n2층 (우) 04043',
      jibun: '서교동 395-135',
    },
  ];

  return (
    <Flex direction="column" justify="center" gap="1.2rem">
      {data.map((item, index) => (
        <Card key={index}>
          <Flex align="center" justify="spaceBetween" gap="1.6rem" width="100%">
            {/* 왼쪽 */}
            <Flex direction="column" gap="0.6rem">
              <Text tag="b4" color="black">
                {item.location}
              </Text>
              <Flex direction="column" gap="0.4rem">
                <Flex justify="spaceBetween">
                  <Flex marginRight="0.4rem">
                    <Text tag="b7" color="gray6">
                      주소
                    </Text>
                  </Flex>
                  <Text tag="b7" color="gray7">
                    {item.address.split('\n').map((line, idx) => (
                      <React.Fragment key={idx}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </Text>
                </Flex>

                <Flex justify="spaceBetween">
                  <Flex marginRight="0.4rem">
                    <Text tag="b7" color="gray6">
                      지번
                    </Text>
                  </Flex>
                  <Text tag="b7" color="gray7">
                    {item.jibun}
                  </Text>
                </Flex>
              </Flex>
            </Flex>

            {/* 오른쪽 */}
            <IcClose width={41} />
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};

export default LocationInfo;
