import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/store';
import { AxiosInstance } from 'axios';
import { Point } from '../types/point';
import { ApiRoutes } from '../const';
import { setDataDestinations, setDataError, setDataOffers, setDataPoints } from './actions';
import { Destination } from '../types/destination';
import { OffersByType } from '../types/offers-by-type';

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
);

export const fetchDestinationsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'fetchDestinationsAction',
  async(_args, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Destination[]>(ApiRoutes.destinations)
      dispatch(setDataDestinations(data));
    }
    catch {
      dispatch(setDataError(true));
    }
  }
);

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'fetchOffersAction',
  async(_args, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<OffersByType[]>(ApiRoutes.offers);
      dispatch(setDataOffers(data));
    }
    catch {
      dispatch(setDataError(true));
    }
  }
);
