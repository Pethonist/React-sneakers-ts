import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import cartEmptyImg from '../../../../assets/empty-cart.jpg';
import { Button } from '../../../../shared';
import styles from './CartEmpty.module.scss';

const CartEmpty: FC = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate('/');
  };

  return (
    <div className={styles.container}>
      <p>Sorry, your cart is empty😥😥😥</p>
      <img src={cartEmptyImg} alt='Empty cart image' />
      <p>To make an order push the button below:</p>
      <Button text='Make order' styles={{ button: styles.button }} onClick={clickHandler} />
    </div>
  );
};

export default CartEmpty;
