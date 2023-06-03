import { FC } from 'react';
import { useAppDispatch } from '../../../../store/store';

import { addItem, minusItem, removeItem } from '../../../../store/Cart/cartSlice';
import { CartItem as CartItemType } from '../../../../types/types';

import { Button, ItemImage } from '../../../../shared';
import styles from './CartItem.module.scss';

interface ICartItemProps {
  imageUrl: string;
  title: string;
  price: number;
  count: number;
  id: number;
}

const CartItem: FC<ICartItemProps> = ({ id, imageUrl, title, price, count }) => {
  const dispatch = useAppDispatch();

  const onClickPlus = () => {
    dispatch(addItem({ id } as CartItemType));
  };

  const onClickMinus = () => {
    dispatch(minusItem(id));
  };

  const deleteItem = () => {
    if (confirm('Are you sure to delete item from cart?')) {
      dispatch(removeItem(id));
    }
  };

  if (!count) {
    dispatch(removeItem(id));
  }

  return (
    <div className={styles.content}>
      <ItemImage img={imageUrl} title={title} styles={{ image: styles.image }} />
      <div className={styles.count}>
        <p>Count:</p>
        <Button text='-' styles={{ button: styles.button }} onClick={onClickMinus} />
        <p>{count}</p>
        <Button text='+' styles={{ button: styles.button }} onClick={onClickPlus} />
      </div>
      <div className={styles.price}>
        <p>Total price:</p>
        <p>{price * count}&#8372;</p>
      </div>
      <div className={styles.remove}>
        {count > 1 && (
          <Button text='Remove' styles={{ button: styles.removeBtn }} onClick={deleteItem} />
        )}
      </div>
    </div>
  );
};

export default CartItem;
