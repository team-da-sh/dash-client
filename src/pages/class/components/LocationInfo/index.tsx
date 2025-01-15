import React from 'react';
import Card from '@/pages/class/components/Card';
import Flex from '@/components/Flex';
import { IcClose } from '@/assets/svg';
import { cardContent, locationBox, locationTitle, addressDetail, addressRow, addressLeft, addressRight } from './index.css';

const LocationInfo = () => {
  const data = [
    {
      round: '1회차',
      date: '2025년 1월 8일 수요일',
      time: '18:00 - 20:00',
      duration: '총 2시간',
      location: '로제이 댄스홀 합정점',
      address: '서울특별시 마포구 잔다리로 3길 31\n 2층 (우) 04043',
      jibun: '서교동 395-135',
    },
  ];

  return (
    <Flex direction="column" justify="center" gap="1.2rem">
      {data.map((item, index) => (
        <Card key={index}>
          <div className={cardContent}>
            {/* 왼쪽 */}
            <div className={locationBox}>
              {/* 장소 이름 */}
              <p className={locationTitle}>{item.location}</p>
              <div className={addressDetail}>
                {/* 주소 */}
                <div className={addressRow}>
                  <span className={addressLeft}>주소</span>
                  <span className={addressRight}>
                    {item.address.split('\n').map((line, idx) => (
                      <React.Fragment key={idx}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </span>
                </div>

                {/* 지번 */}
                <div className={addressRow}>
                  <span className={addressLeft}>지번</span>
                  <span className={addressRight}>{item.jibun}</span>
                </div>
              </div>
            </div>

            {/* 오른쪽 */}
            <IcClose width={'4.1rem'} />
          </div>
        </Card>
      ))}
    </Flex>
  );
};

export default LocationInfo;
