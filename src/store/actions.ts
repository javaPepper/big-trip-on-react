import { createAction } from '@reduxjs/toolkit';

export const setClickedButton = createAction('setClickeButton',
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

export const setClickedFilter = createAction('setClickedFilter',
(value: boolean) => ({payload: value}))

