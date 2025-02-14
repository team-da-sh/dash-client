import { useGetPopularDancers } from '@/pages/home/apis/queries';
import DancerItem from '@/pages/home/components/DancerItem';
import { containerStyle, dancerListWrapperstyle, titleStyle } from '@/pages/home/components/PopularDancers/index.css';
import Flex from '@/shared/components/Flex';
import Head from '@/shared/components/Head';
import { genreMapping } from '@/shared/constants';

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
