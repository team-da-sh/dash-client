import { useGetPopularDancers } from '@/pages/home/apis/queries';
import DancerItem from '@/pages/home/components/DancerItem/DancerItem';
import {
  containerStyle,
  dancerListWrapperstyle,
  titleStyle,
} from '@/pages/home/components/PopularDancers/popularDancers.css';
import Flex from '@/shared/components/Flex/Flex';
import Head from '@/shared/components/Head/Head';
import { genreMapping } from '@/shared/constants';

const PopularDancers = () => {
  const { data } = useGetPopularDancers();

  return (
    <div className={dancerListWrapperstyle}>
      <Head level="h2" tag="h4" className={titleStyle}>
        가장 핫한 댄서들만 모아봤어요
      </Head>
      <Flex direction='column' position='fixed'>
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
