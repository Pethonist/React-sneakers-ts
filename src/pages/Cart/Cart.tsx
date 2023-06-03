import { FC } from 'react';
import { useSelector } from 'react-redux';

import { selectCart } from '../../store/Cart/selectors';

import { CartItem } from './components';
import { Button } from '../../shared';
import styles from './Cart.module.scss';

const Cart: FC = () => {
  const { items, totalPrice } = useSelector(selectCart);

  return (
    <section className={styles.container}>
      {items.map((item) => (
        <CartItem {...item} />
      ))}
      <section className={styles.activity}>
        <div>
          <p>Total price: {totalPrice}&#8372;</p>
          <Button text='Make order' styles={{ button: styles.button }} />
        </div>
        <Button text='Clear cart' styles={{ button: styles.button }} />
      </section>
    </section>
  );
};

export default Cart;
