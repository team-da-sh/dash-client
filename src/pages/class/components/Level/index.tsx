import React from 'react';
import Card from '@/pages/class/components/Card';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Text from '@/components/Text';
import { IcClose, IcQuesitonmark } from '@/assets/svg';

const Level = () => {
  const data = [
    {
      level: "입문자",
      content:
        '바다리만의 트렌디한 힙합 베이스를\n바다리만의 트렌디한 힙합 베이스를 배우고\n바다리만의 트렌디한 힙합 베이스를 배우고 싶은 분\n',
    },
  ];

  return (
    <>
      <Flex direction="column" gap="3.6rem">
        <div>
          <Card>
            <Flex gap="0.8rem" align="center">
              <IcClose width={36} />
              <Head level="h6" tag="h6">
                {data[0].level}
              </Head>
              <Text tag="b8" color="gray8">
                기본 동작과 리듬 익히기 중심의 단계를 말해요!
              </Text>
            </Flex>
          </Card>
          <Flex justify="flexEnd" align="center" gap="0.6rem">
            <Text tag="c3" color="gray7">
              클래스 난이도는 이렇게 설정되어있어요!
            </Text>
            <IcQuesitonmark width={14} />
          </Flex>
        </div>
        <Flex direction="column" gap="1.2rem">
          <Flex justify="flexStart" align="center" gap="0.8rem">
            <IcClose width={24} />
            <Head level="h5" tag="h6">
              이런 분들에게 해당 클래스를 추천해요!
            </Head>
          </Flex>

          {data.map((item, index) => (
            <Text tag="b3" color="gray8" key={index}>
              {item.content.split('\n').map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </Text>
          ))}
        </Flex>
      </Flex>
    </>
  );
};

export default Level;
