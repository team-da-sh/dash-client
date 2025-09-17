import { fixedContainerStyle, blurCapStyle } from '@/shared/components/BlurButton/BlurButton.css';

interface BlurButtonProps {
  blurColor?: 'gray' | 'white';
  children: React.ReactNode;
}

const BlurBotton = ({ blurColor = 'gray', children }: BlurButtonProps) => {
  return (
    <div className={fixedContainerStyle({ blurBase: blurColor })}>
      <div aria-hidden className={blurCapStyle[blurColor]} />
      <div style={{ display: 'flex', gap: '1.2rem' }}>{children}</div>
    </div>
  );
}

export default BlurBotton;