import { createAction } from '@reduxjs/toolkit';

export const setClickedButton = createAction('addNewPoint',
(isClicked: boolean) => ({payload: isClicked}))

export const setActivePoint = createAction('setActivePoint',
(activeId: string) => ({payload: activeId}))

export const setClickedEdit = createAction('setClickedEdit',
(isClicked: boolean) => ({payload: isClicked}))

export const setType = createAction('setType',
(type: string) => ({payload: type}))
