import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { Destination } from '../types/destination';
import { setClickedButton, setClickedEdit, setType, setActivePoint, setFilterValue, setSortedPoints } from './actions';

type initialStateType = {
  isClickedHeader: boolean,
  activeId: string,
  isClickedEdit: boolean,
  type: string,
  filterValue: string,
  sortValue: string,
}

const initialState: initialStateType = {
  isClickedHeader: false,
  activeId: '',
  isClickedEdit: false,
  type: 'flight',
  filterValue: '',
  sortValue: '',
}

export const reducer = createReducer(initialState, (builder) => {
  builder
  .addCase(setClickedButton, (state, action: PayloadAction<boolean>) => {
    state.isClickedHeader = action.payload;
  })
  .addCase(setActivePoint, (state, action: PayloadAction<string>) => {
    state.activeId = action.payload;
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
});
