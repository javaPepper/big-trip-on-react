import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { Destination } from '../types/destination';
import { OffersByType } from '../types/offers-by-type';
import { Point } from '../types/point';
import { setClickedButton, setActivePoint, setClickedEdit,
  setType, setFilterValue, setSortedPoints, setClickedFilter,
  setDataPoints, setDataError, setDataDestinations, setDataDestinationsLoading,
  setDataOffers, setActiveOffers, setActiveOfferId, setClosed } from './actions';

type initialStateType = {
  isClickedHeader: boolean,
  activeId: string,
  isClickedEdit: boolean,
  type: string,
  filterValue: string,
  sortValue: string,
  isClickedFilter: boolean,
  points: Point[],
  error: boolean,
  destinations: Destination[],
  isDataLoading: boolean,
  offers: OffersByType[],
  activeOffers: number[],
  activeOfferId: number,
  isClosed: boolean,
}

const initialState: initialStateType = {
  isClickedHeader: false,
  activeId: '',
  isClickedEdit: false,
  type: 'flight',
  filterValue: '',
  sortValue: '',
  isClickedFilter: false,
  points: [],
  error: false,
  destinations: [],
  isDataLoading: false,
  offers: [],
  activeOffers: [],
  activeOfferId: 0,
  isClosed: false,
}

export const reducer = createReducer(initialState, (builder) => {
  builder
  .addCase(setClosed, (state, action: PayloadAction<boolean>) => {
    state.isClosed = action.payload;
  })
  .addCase(setClickedButton, (state, action: PayloadAction<boolean>) => {
    state.isClickedHeader = action.payload;
  })
  .addCase(setActivePoint, (state, action: PayloadAction<string>) => {
    state.activeId = action.payload;
  })
  .addCase(setActiveOffers, (state, action: PayloadAction<number[]>) => {
    state.activeOffers = action.payload;
  })
  .addCase(setActiveOfferId, (state, action: PayloadAction<number>) =>{
    state.activeOfferId = action.payload;
  })
  .addCase(setClickedEdit, (state, action: PayloadAction<boolean>) => {
    state.isClickedEdit = action.payload;
  })
  .addCase(setType, (state, action: PayloadAction<string>) => {
    state.type = action.payload;
  })
  .addCase(setFilterValue, (state, action: PayloadAction<string>) => {
    state.filterValue = action.payload;
  })
  .addCase(setSortedPoints, (state, action: PayloadAction<string>) => {
    state.sortValue = action.payload;
  })
  .addCase(setClickedFilter, (state, action: PayloadAction<boolean>) => {
    state.isClickedFilter = action.payload;
  })
  .addCase(setDataPoints, (state, action: PayloadAction<Point[]>) => {
    state.points = action.payload;
  })
  .addCase(setDataError, (state, action: PayloadAction<boolean>) => {
    state.error = action.payload;
  })
  .addCase(setDataDestinations, (state, action: PayloadAction<Destination[]>) => {
    state.destinations = action.payload;
  })
  .addCase(setDataDestinationsLoading, (state, action: PayloadAction<boolean>) => {
    state.isDataLoading = action.payload;
  })
  .addCase(setDataOffers, (state, action: PayloadAction<OffersByType[]>) => {
    state.offers = action.payload;
  })
});
