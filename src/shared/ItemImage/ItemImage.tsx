import { FC } from 'react';

interface IItemImageProps {
  img: string;
  title: string;
  styles?: CSSModuleClasses;
  onClick?: () => void;
}

const ItemImage: FC<IItemImageProps> = ({ img, title, styles, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <img loading='lazy' src={img} alt={title} className={styles?.image} onClick={handleClick} />
  );
};

export default ItemImage;
