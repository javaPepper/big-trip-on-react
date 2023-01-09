import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { setClickedButton, setCheckedOffer, setTotalPrice, setClickedEdit, setType, setCloseEvent } from './actions';

type initialStateType = {
  isClickedHeader: boolean,
  isChecked: boolean,
  totalPrice: number,
  isClickedEdit: boolean,
  type: string,
  isClosed: boolean,
}

const initialState: initialStateType = {
  isClickedHeader: false,
  isChecked: false,
  totalPrice: 0,
  isClickedEdit: false,
  type: 'flight',
  isClosed: false,
}

export const reducer = createReducer(initialState, (builder) => {
  builder
  .addCase(setClickedButton, (state, action: PayloadAction<boolean>) => {
    state.isClickedHeader = action.payload;
  })
  .addCase(setCheckedOffer, (state, action: PayloadAction<boolean>) => {
    state.isChecked = action.payload;
  })
  .addCase(setTotalPrice, (state, action: PayloadAction<number>) => {
    state.totalPrice = action.payload;
  })
  .addCase(setClickedEdit, (state, action: PayloadAction<boolean>) => {
    state.isClickedEdit = action.payload;
  })
  .addCase(setType, (state, action: PayloadAction<string>) => {
    state.type = action.payload;
  })
  .addCase(setCloseEvent, (state, action: PayloadAction<boolean>) => {
    state.isClosed = action.payload;
  })
});
