import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/store';
import { AxiosInstance } from 'axios';
import { Point } from '../types/point';
import { ApiRoutes } from '../const';
import { setClickedButton, setClosed, setDataDestinations,
setDataError, setDataOffers, setDataPoints, setDeleted } from './actions';
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

export const postNewPointAction = createAsyncThunk<void, Point, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'postNewPoint',
  async({base_price, date_from, date_to, destination, id, is_favorite, offers, type}, {dispatch, extra: api, getState}) => {
    try {
      const {data} = await api.post<Point>(ApiRoutes.points,
      {base_price, date_from, date_to, destination, id, is_favorite, offers, type});
     if(!((getState().points).includes(data))) {
      const newPoints = (getState().points).concat(data);
      dispatch(setDataPoints(newPoints));
      dispatch(setClickedButton(false));
     }
    }
    catch {
      dispatch(setDataError(true));
    }
  }
);

export const postEditPointAction = createAsyncThunk<void, Point, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'putEditPoint',
  async({base_price, date_from, date_to, destination, id, is_favorite, offers, type},
    {dispatch, extra: api, getState}) => {
    try {
      const {data} = await api.put<Point>(`${ApiRoutes.points}/${id}`,
      {base_price, date_from, date_to, destination, id, is_favorite, offers, type});
      dispatch(setDataPoints((getState().points).map((point) => point.id === data.id ? data : point)));
      dispatch(setClosed(true));
      dispatch(setClickedButton(false));
    }
    catch {
      dispatch(setDataError(true));
    }
      }
);

export const deletePointAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'deletePoint',
  async(id, {dispatch, extra: api}) => {
    try {
      await api.delete(`${ApiRoutes.points}/${id}`);
      dispatch(setDeleted(true));
    }
    catch {
      dispatch(setDataError(true));
    }
  }
);
