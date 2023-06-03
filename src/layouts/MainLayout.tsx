import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer, Header } from '../shared';

import styles from './MainLayout.module.scss';

const MainLayout: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
