import { FC } from 'react';

interface IButtonProps {
  styles?: CSSModuleClasses;
  text: string;
  onClick?: () => void;
}

const Button: FC<IButtonProps> = ({ text, styles, onClick }) => {
  return (
    <button className={styles?.button} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
