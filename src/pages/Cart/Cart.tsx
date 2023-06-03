import { FC } from 'react';
import { useSelector } from 'react-redux';

import { CartItem } from './components';
import styles from './Cart.module.scss';
import { selectCart } from '../../store/Cart/selectors';

const Cart: FC = () => {
  const { items, totalPrice } = useSelector(selectCart);
  console.log(totalPrice);

  return (
    <section className={styles.container}>
      {items.map((item) => (
        <CartItem totalPrice={totalPrice} {...item} />
      ))}
    </section>
  );
};

export default Cart;
