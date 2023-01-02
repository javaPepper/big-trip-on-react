import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { setClickedButton, setCheckedOffer, setTotalPrice, addCheckedOffer, addId } from './actions';

type initialStateType = {
  isClicked: boolean,
  isChecked: boolean,
  totalPrice: number,
  id: number,
  ids: number[],
}

const initialState: initialStateType = {
  isClicked: false,
  isChecked: false,
  totalPrice: 0,
  id: 0,
  ids: []
}

export const reducer = createReducer(initialState, (builder) => {
  builder
  .addCase(setClickedButton, (state, action: PayloadAction<boolean>) => {
    state.isClicked = action.payload;
  })
  .addCase(setCheckedOffer, (state, action: PayloadAction<boolean>) => {
    state.isChecked = action.payload;
  })
  .addCase(setTotalPrice, (state, action: PayloadAction<number>) => {
    state.totalPrice = action.payload;
  })
  .addCase(addCheckedOffer, (state, action: PayloadAction<number>) => {
    state.id = action.payload;
  })
  .addCase(addId, (state, action: PayloadAction<number[]>) =>{
    state.ids = action.payload;
  })
});
