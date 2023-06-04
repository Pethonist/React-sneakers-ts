import { FC } from 'react';
import classNames from 'classnames';
import { FiHeart } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../../store/store';

import { addItem } from '../../../../store/Cart/cartSlice';
import { addToWishlist, removeFromWishlist } from '../../../../store/Wishlist/wishlistSlice';
import { selectWishlist } from '../../../../store/Wishlist/selectors';

import { CartItem, Sneaker } from '../../../../types/types';
import { SIZE } from '../../../../constants/constants';
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
  const { items } = useSelector(selectWishlist);

  const isItemInWishlist = items.some((obj) => obj.id === id);

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

  const onClickLike = () => {
    const item: Sneaker = {
      id,
      title,
      price,
      imageUrl,
    };

    if (isItemInWishlist) {
      dispatch(removeFromWishlist(id));
    } else {
      dispatch(addToWishlist(item));
    }
  };

  const wishlistBtnStyles = classNames(styles.icon, {
    [styles.iconColored]: isItemInWishlist,
  });

  return (
    <div className={styles.container}>
      <div onClick={onClickLike} className={wishlistBtnStyles}>
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
