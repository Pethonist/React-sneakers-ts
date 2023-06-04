import { FC } from 'react';
import styles from './WishlistEmpty.module.scss';

const WishlistEmpty: FC = () => {
  return (
    <div className={styles.container}>
      <p>You wishlist are empty😢😢😢</p>
      <p>Try to fill your wishlist of our perfect sneakers)))</p>
    </div>
  );
};

export default WishlistEmpty;
