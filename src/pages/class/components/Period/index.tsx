import Flex from "@/components/Flex";
import Card from "@/pages/class/components/Card";
import Text from "@/components/Text"
import { cardContent, roundBox } from "./index.css";

const Period = () => {
  const data = [
    {
      round: "1회차",
      date: "2025년 1월 8일 수요일",
      time: "18:00 - 20:00",
      duration: "총 2시간",
    },
    {
      round: "2회차",
      date: "2025년 1월 9일 목요일",
      time: "14:00 - 16:00",
      duration: "총 2시간",
    },
    {
      round: "3회차",
      date: "2025년 1월 10일 금요일",
      time: "10:00 - 12:00",
      duration: "총 2시간",
    },
    {
      round: "4회차",
      date: "2025년 1월 11일 토요일",
      time: "15:00 - 17:00",
      duration: "총 2시간",
    },
  ];

  return (
    <>
    <Flex direction="column" justify="center" gap="1.2rem">
      {data.map((item, index) => (
        <Card key={index}>
          <div className={cardContent}>
            <div className={roundBox}>
              <Text tag='b10' color='white'>{item.round}</Text></div>
            <div>
              <Text tag="b4" color="black">{item.date}</Text>
              <Text tag="b7" color="gray7">
                {item.time} ({item.duration})
              </Text>
            </div>
          </div>
        </Card>
      ))}
      </Flex>
    </>
  );
};

export default Period;
