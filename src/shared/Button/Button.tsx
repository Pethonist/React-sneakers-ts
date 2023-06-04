import { FC } from 'react';
import classNames from 'classnames';
import rootStyles from './Button.module.scss';

interface IButtonProps {
  styles?: CSSModuleClasses;
  text: string;
  onClick?: () => void;
}

const Button: FC<IButtonProps> = ({ text, styles, onClick }) => {
  const btnClass = classNames(rootStyles.root, styles?.button);

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button className={btnClass} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
