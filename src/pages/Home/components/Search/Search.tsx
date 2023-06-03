import { FC, useState, useCallback, ChangeEvent } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';
import { useAppDispatch } from '../../../../store/store';
import debounce from 'lodash.debounce';

import { setSearchValue } from '../../../../store/Filter/filterSlice';

import styles from './Search.module.scss';

const SIZE = 24;

const Search: FC = () => {
  const [value, setValue] = useState<string>('');
  const dispatch = useAppDispatch();

  const updateSearchValue = useCallback(
    debounce((value: string) => {
      dispatch(setSearchValue(value));
    }, 1000),
    []
  );

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    updateSearchValue(event.target.value);
    setValue(event.target.value);
  };

  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setValue('');
  };

  return (
    <section className={styles.container}>
      <p>{value ? `You search: "${value}"` : 'All sneakers'}</p>
      <div className={styles.input}>
        <FiSearch size={SIZE} />
        <input placeholder='Search...' value={value} onChange={onChangeInput} />
        {value && <FiX size={SIZE} onClick={onClickClear} />}
      </div>
    </section>
  );
};

export default Search;
