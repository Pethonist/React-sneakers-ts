import { FC } from 'react';
import { useAppDispatch } from '../../../../store/store';

import { Button, ItemImage } from '../../../../shared';
import styles from './WishlistItem.module.scss';
import { addItem } from '../../../../store/Cart/cartSlice';
import { CartItem } from '../../../../types/types';
import { removeFromWishlist } from '../../../../store/Wishlist/wishlistSlice';

interface IWishlistItemProps {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
}

const WishlistItem: FC<IWishlistItemProps> = ({ id, title, price, imageUrl }) => {
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

  const onClickRemove = () => {
    dispatch(removeFromWishlist(id));
  };

  return (
    <div className={styles.container}>
      <ItemImage img={imageUrl} title={title} styles={{ image: styles.image }} />
      <p className={styles.title}>{title}</p>
      <div className={styles.buttons}>
        <Button text='Add to cart' styles={{ button: styles.button }} onClick={onClickAdd} />
        <Button
          text='Remove from wishlist'
          styles={{ button: styles.button }}
          onClick={onClickRemove}
        />
      </div>
    </div>
  );
};

export default WishlistItem;
