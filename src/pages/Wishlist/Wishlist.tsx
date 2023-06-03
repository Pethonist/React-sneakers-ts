import { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectWishlist } from '../../store/Wishlist/selectors';
import { WishlistItem } from './components';

import styles from './Wishlist.module.scss';

const Wishlist: FC = () => {
  const { items } = useSelector(selectWishlist);

  return (
    <section className={styles.content}>
      {items.map((item) => (
        <WishlistItem key={item.id} {...item} />
      ))}
    </section>
  );
};

export default Wishlist;
