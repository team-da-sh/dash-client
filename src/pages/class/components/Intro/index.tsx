import React from "react";
import Text from '@/components/Text'
import Flex from "@/components/Flex";

interface IntroData {
  content: string;
}

const Intro = () => {
  const data:IntroData[] = [
    {
      content:
        '안녕하세요, 안무가 바다입니다.\n\n저는 인기 아이돌의 안무가로서 다양한 작업에 참여해왔고 현재는 안무 작업 뿐만 아니라 강습도 함께 진행하고 있습니다.\n\n이번 강의에서는 기본기와 프리스타일 위주로 진행하려고 합니다.\n\n💜먼저, 연결이라는 주제로 움직여보면서 자신만의 무브를 찾아가 볼 예정이고 익숙해진 후에는 컨트롤을 주제로 다양한 루틴을 시도해 볼 예정입니다.',
    },
  ];

  return (
    <>
      <Flex padding="0.8rem 0 0">
        {data.map((item, index) => (
          <Text tag='b3' color='gray8' key={index}>
            {item.content.split('\n').map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </Text>
        ))}
      </Flex>
    </>
  );
};

export default Intro;
