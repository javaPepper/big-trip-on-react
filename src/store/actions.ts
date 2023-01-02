import { createAction } from '@reduxjs/toolkit';

export const setClickedButton = createAction('addNewPoint',
(isClicked: boolean) => ({payload: isClicked}))

export const setCheckedOffer = createAction('checkedOffer',
(isChecked: boolean) => ({payload: isChecked}))

export const setTotalPrice = createAction('setTotalPrice',
(price: number) => ({payload: price}))

export const addCheckedOffer = createAction('addCheckedOffer',
(id: number) => ({payload: id}))

export const addId = createAction('addId',
(ids: number[]) => ({payload: ids}))
