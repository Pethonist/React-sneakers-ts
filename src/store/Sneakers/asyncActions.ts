import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';

import { SearchParams, Sneaker } from '../../types/types';
import { pageLimit } from '../../constants/constants';

export const fetchSneakers = createAsyncThunk<Sneaker[], SearchParams>(
  'sneakers/fetchSneakers',
  async (params) => {
    const { searchValue, currentPage } = params;
    const { data } = await axios.get<Sneaker[]>('http://localhost:3004/sneakers', {
      params: pickBy(
        {
          q: searchValue,
          _page: currentPage,
          _limit: pageLimit,
        },
        identity
      ),
    });

    return data;
  }
);
