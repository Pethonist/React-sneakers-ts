import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectSneakersData } from '../../store/Sneakers/selectors';
import { Status } from '../../types/types';

import { selectFilter } from '../../store/Filter/selectors';
import { useAppDispatch } from '../../store/store';
import { setCurrentPage } from '../../store/Filter/filterSlice';
import { fetchSneakers } from '../../store/Sneakers/asyncActions';
import kermit from '../../assets/kermit.svg';

import { Error, Search, Pagination, ItemCard, Skeleton } from './components';
import styles from './Home.module.scss';

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useSelector(selectSneakersData);
  const { searchValue, currentPage } = useSelector(selectFilter);

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  /*const getItems = async () => {
     dispatch(fetchSneakers({ searchValue, currentPage }));
   };*/

  useEffect(() => {
    // getItems();
    dispatch(fetchSneakers({ searchValue, currentPage }));
    window.scrollTo(0, 0);
  }, [searchValue, currentPage, dispatch]);

  const sneakers = items.map((item) => <ItemCard key={item.id} {...item} />);
  const skeleton = [...new Array(12)].map((_, index) => <Skeleton key={index} />);

  return (
    <>
      {status === Status.ERROR ? (
        <section className={styles.errorMsg}>
          <Error />
        </section>
      ) : (
        <>
          <section className={styles.img}>
            <img loading='lazy' src={kermit} alt='New in stock' />
          </section>
          <Search />
          <section className={styles.items}>{status === 'loading' ? skeleton : sneakers}</section>
          <section className={styles.pagination}>
            <Pagination currentPage={currentPage} onChangePage={onChangePage} />
          </section>
        </>
      )}
    </>
  );
};

export default Home;
