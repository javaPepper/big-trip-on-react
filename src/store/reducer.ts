import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { setClickedButton, setClickedEdit, setType, setActivePoint } from './actions';

type initialStateType = {
  isClickedHeader: boolean,
  activeId: string,
  isClickedEdit: boolean,
  type: string,
}

const initialState: initialStateType = {
  isClickedHeader: false,
  activeId: '',
  isClickedEdit: false,
  type: 'flight',
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
});
