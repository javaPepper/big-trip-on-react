import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/store';
import { AxiosInstance } from 'axios';
import { Point } from '../types/point';
import { ApiRoutes } from '../const';
import { setDataError, setDataPoints } from './actions';

export const fetchPointsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'fetchPointsAction',
  async(_args, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Point[]>(ApiRoutes.points);
      console.log(data);
      console.log('цена', data[16].base_price);
      console.log('destination', data[16].destination);
      console.log('дата', data[16].date_from);
      console.log('id', data[16].id);
      dispatch(setDataPoints(data));
    }
    catch {
      dispatch(setDataError(true))
    }
  }
)
