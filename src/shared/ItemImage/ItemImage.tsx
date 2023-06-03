import { FC } from 'react';

interface IItemImageProps {
  img: string;
  title: string;
  styles?: CSSModuleClasses;
  onClick?: (id: number) => void;
}

const ItemImage: FC<IItemImageProps> = ({ img, title, styles, onClick }) => {
  return <img src={img} alt={title} className={styles?.image} onClick={onClick} />;
};

export default ItemImage;
