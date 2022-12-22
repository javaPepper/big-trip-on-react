import { createAction } from '@reduxjs/toolkit';

export const setClickedButton = createAction('addNewPoint',
(isClicked: boolean) => ({payload: isClicked}))
