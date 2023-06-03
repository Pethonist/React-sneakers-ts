import { FC } from 'react';
import { FiHeart } from 'react-icons/fi';
import { useAppDispatch } from '../../../../store/store';

import { CartItem } from '../../../../types/types';
import { SIZE } from '../../../../constants/constants';
import { addItem } from '../../../../store/Cart/cartSlice';

import { ItemImage, Button } from '../../../../shared';
import styles from './ItemCard.module.scss';

interface IItemCardProps {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
}

const ItemCard: FC<IItemCardProps> = ({ id, title, price, imageUrl }) => {
  const dispatch = useAppDispatch();

  const onClickAdd = () => {
    const item: CartItem = {
      id,
      title,
      price,
      imageUrl,
      count: 0,
    };
    dispatch(addItem(item));
  };

  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <FiHeart size={SIZE} />
      </div>
      <ItemImage img={imageUrl} title={title} styles={{ image: styles.image }} />
      <p className={styles.title}>{title}</p>
      <div className={styles.price}>
        <p>Price:</p>
        <p>{price}&#8372;</p>
      </div>
      <Button styles={{ button: styles.button }} text='Add to cart' onClick={onClickAdd} />
    </div>
  );
};

export default ItemCard;
