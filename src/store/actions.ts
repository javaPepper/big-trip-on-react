import { createAction } from '@reduxjs/toolkit';

export const setClickedButton = createAction('addNewPoint',
(isClicked: boolean) => ({payload: isClicked}))

export const setCheckedOffer = createAction('checkedOffer',
(isChecked: boolean) => ({payload: isChecked}))

export const setTotalPrice = createAction('setTotalPrice',
(price: number) => ({payload: price}))

export const setClickedEdit = createAction('setClickedEdit',
(isClicked: boolean) => ({payload: isClicked}))

export const setType = createAction('setType',
(type: string) => ({payload: type}))
