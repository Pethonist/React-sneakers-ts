import { FC } from 'react';

interface IItemImageProps {
  img: string;
  title: string;
  styles?: CSSModuleClasses;
}

const ItemImage: FC<IItemImageProps> = ({ img, title, styles }) => {
  return <img loading='lazy' src={img} alt={title} className={styles?.image} />;
};

export default ItemImage;
