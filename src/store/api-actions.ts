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
      dispatch(setDataPoints(data));
    }
    catch {
      dispatch(setDataError(true))
    }
  }
)
