import { FC } from 'react';
import { Button, ItemImage } from '../../../../shared';

import styles from './CartItem.module.scss';

interface ICartItemProps {
  imageUrl: string;
  title: string;
  totalPrice: number;
  count: number;
  id: number;
}

const CartItem: FC<ICartItemProps> = ({ id, imageUrl, title, totalPrice, count }) => {
  return (
    <div className={styles.content}>
      <ItemImage img={imageUrl} title={title} styles={{ image: styles.image }} />
      <div className={styles.count}>
        <p>Count:</p>
        <Button text='+' styles={{ button: styles.button }} />
        <p>{count}</p>
        <Button text='-' styles={{ button: styles.button }} />
      </div>
      <div className={styles.price}>
        <p>Total price:</p>
        <p>{totalPrice}&#8372;</p>
      </div>
    </div>
  );
};

export default CartItem;
