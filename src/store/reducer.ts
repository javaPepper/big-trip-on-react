import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { setClickedButton } from './actions';

type initialStateType = {
  isClicked: boolean,
}

const initialState: initialStateType = {
  isClicked: false,
}

export const reducer = createReducer(initialState, (builder) => {
  builder
  .addCase(setClickedButton, (state, action: PayloadAction<boolean>) => {
    state.isClicked = action.payload;
  })
});
