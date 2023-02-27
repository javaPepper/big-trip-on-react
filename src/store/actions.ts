import { createAction } from '@reduxjs/toolkit';
import { Destination } from '../types/destination';
import { OffersByType } from '../types/offers-by-type';
import { Point } from '../types/point';

export const setClickedOffer = createAction('setClickedOffer',
  (isClicked: boolean) => ({payload: isClicked}));

export const setPointsPrice = createAction('setPointsPrice',
  (price: number) => ({payload: price}));

export const setDeleted = createAction('setDeleted',
  (isDeleted: boolean) => ({payload: isDeleted}));

export const setClickedAddNewButton = createAction('setClickeButton',
  (isClicked: boolean) => ({payload: isClicked}));

export const setClosed = createAction('setClosed',
  (isClosed: boolean) => ({payload: isClosed}));

export const setActivePoint = createAction('setActivePoint',
  (activeId: string) => ({payload: activeId}));

export const setActiveOfferId = createAction('setActiveOfferId',
  (id: number) => ({payload: id}));

export const setActiveOffers = createAction('setActiveOffers',
  (id: number[]) => ({payload: id}));

export const setClickedEdit = createAction('setClickedEdit',
  (isClicked: boolean) => ({payload: isClicked}));

export const setType = createAction('setType',
  (type: string) => ({payload: type}));

export const setFilterValue = createAction('setFilterValue',
  (value: string) => ({payload: value}));

export const setSortingValue = createAction('setSortingValue',
  (value: string) => ({payload: value}));

export const setClickedFilter = createAction('setClickedFilter',
  (value: boolean) => ({payload: value}));

export const setDataPoints = createAction('setDataPoints',
  (points: Point[]) => ({payload: points}));

export const setDataError = createAction('setDataError',
  (error: boolean) => ({payload: error}));

export const setDataDestinations = createAction('setDataDestinations',
  (value: Destination[]) => ({payload: value}));

export const setDataDestinationsLoading = createAction('setDataDestLoading',
  (isLoading: boolean) => ({payload: isLoading}));

export const setDataOffers = createAction('setDataOffers',
  (offers: OffersByType[]) => ({payload: offers}));
