import { ClearGif } from '@/shared/assets/gif';
import * as style from '@/shared/components/Completion/completion.css';
import Head from '@/shared/components/Head/Head';
import Text from '@/shared/components/Text/Text';
import { sprinkles } from '@/shared/styles/sprinkles.css';

interface CompletionPropTypes {
  title: string;
  subTitle: string;
  description: string;
}

const Completion = ({ title, subTitle, description }: CompletionPropTypes) => {
  return (
    <section className={style.flexCustomStyle}>
      <div className={sprinkles({ display: 'flex', flexDirection: 'column' })}>
        <Head level="h1" tag="h3_sb">
          {title}
        </Head>
        <Head level="h1" tag="h3_sb">
          {subTitle}
        </Head>
      </div>
      <Text tag="b2_m" color="gray7">
        {description}
      </Text>
      <img src={ClearGif} alt="완료 페이지 캐릭터" className={style.clearStyle} />
    </section>
  );
};

export default Completion;
