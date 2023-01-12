import { createAction } from '@reduxjs/toolkit';
import { Destination } from '../types/destination';

export const setClickedButton = createAction('addNewPoint',
(isClicked: boolean) => ({payload: isClicked}))

export const setActivePoint = createAction('setActivePoint',
(activeId: string) => ({payload: activeId}))

export const setClickedEdit = createAction('setClickedEdit',
(isClicked: boolean) => ({payload: isClicked}))

export const setType = createAction('setType',
(type: string) => ({payload: type}))

export const setFilterValue = createAction('setFilterValue',
(value: string) => ({payload: value}))

export const setSortedPoints = createAction('setSortedPoints',
(value: string) => ({payload: value}))

