import { FC, cloneElement } from 'react';
import { FiUser, FiHeart, FiShoppingCart, FiSunrise, FiSunset } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { SIZE } from '../../constants/constants';
import logo from '../../assets/logo.svg';

import styles from './Header.module.scss';

const USERS_ICONS = [
  { id: 0, icon: <FiUser />, path: '/user' },
  { id: 1, icon: <FiHeart />, path: '/wishlist' },
  { id: 2, icon: <FiShoppingCart />, path: '/cart' },
];

const Header: FC = () => {
  return (
    <header>
      <Link to='/' className={styles.logo}>
        <img src={logo} alt='Logo' />
        <p>React sneakers</p>
      </Link>
      <section className={styles.users}>
        <div className={styles.usersRouteBtns}>
          {USERS_ICONS.map(({ id, icon, path }) => (
            <Link key={id} to={path}>
              {cloneElement(icon, { size: SIZE })}
            </Link>
          ))}
        </div>
        <FiSunrise size={SIZE} />
      </section>
    </header>
  );
};

export default Header;
