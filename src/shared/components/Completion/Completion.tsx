import Head from '@/common/components/Head/Head';
import Text from '@/common/components/Text/Text';
import { ClearGif } from '@/shared/assets/gif';
import { flexCustomStyle, clearStyle, titleWrapperStyle } from '@/shared/components/Completion/completion.css';

interface CompletionPropTypes {
  title: string;
  subTitle: string;
  description: string;
}

const Completion = ({ title, subTitle, description }: CompletionPropTypes) => {
  return (
    <section className={flexCustomStyle}>
      <div className={titleWrapperStyle}>
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
      <img src={ClearGif} alt="완료 페이지 캐릭터" className={clearStyle} />
    </section>
  );
};

export default Completion;
