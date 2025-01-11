import { button } from './index.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg';
}

const Button = ({ size, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={button({
        size,
      })}>
      {props.children}
    </button>
  );
};

export default Button;
