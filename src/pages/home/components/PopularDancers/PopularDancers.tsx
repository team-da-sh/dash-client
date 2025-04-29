import { useGetPopularDancers } from '@/pages/home/apis/queries';
import DancerItem from '@/pages/home/components/DancerItem/DancerItem';
import {
  containerStyle,
  dancerListWrapperstyle,
  titleStyle,
} from '@/pages/home/components/PopularDancers/popularDancers.css';
import Head from '@/shared/components/Head/Head';
import { genreMapping } from '@/shared/constants';

const PopularDancers = () => {
  const { data: popularDancerList } = useGetPopularDancers();

  return (
    <div className={dancerListWrapperstyle}>
      <Head level="h2" tag="h5_sb" className={titleStyle}>
        가장 핫한 댄서들만 모아봤어요
      </Head>

      <ul className={containerStyle}>
        {popularDancerList?.teachers
          .slice(0, 10)
          .map((teacher) => (
            <DancerItem key={teacher.id} genre={genreMapping[teacher.genres[0] ?? 'BRAKING']} {...teacher} />
          ))}
      </ul>
    </div>
  );
};

export default PopularDancers;
