import DancerItem from '@/pages/home/components/DancerItem';
import { dancerListWrapperstyle, containerStyle, titleStyle } from '@/pages/home/components/PopularDancers/index.css';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import { useGetPopularDancers } from '@/apis/home/queries';
import { genreMapping } from '@/constants';

const PopularDancers = () => {
  const { data } = useGetPopularDancers();

  return (
    <div className={dancerListWrapperstyle}>
      <Head level="h2" tag="h4" className={titleStyle}>
        가장 핫한 댄서들만 모아봤어요
      </Head>
      <Flex tag="ul" gap="0.8rem" marginTop="2rem" className={containerStyle}>
        {data?.teachers.map((data) => (
          <DancerItem
            key={data.id}
            id={data.id}
            profileImage={data.profileImage}
            genre={genreMapping[data.genres[0] ?? 'BRAKING']}
            nickname={data.nickname}
          />
        ))}
      </Flex>
    </div>
  );
};

export default PopularDancers;
