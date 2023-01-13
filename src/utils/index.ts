import dayjs from "dayjs";
import { EmptyValues, FilterValues, SortingValues } from "../const";
import { Point } from "../types/point";

export const setEmptyValue = (value: string) => {
  switch(true) {
    case value === FilterValues.everything:
      return EmptyValues.everything;
    case value === FilterValues.future:
      return EmptyValues.future;
    case value === FilterValues.past:
      return EmptyValues.past;
    default:
      return '';
  }
};

export const getSortingValues = (points: Point[], currentValue: string) => {
  let values: Point[] = [];
  switch(true) {
    case currentValue === SortingValues.price:
      values = points.sort((a, b) => b.basePrice - a.basePrice);
      return values;
    case currentValue === SortingValues.day:
      values = points.sort((a, b) => new Date(b.dateFrom).getTime() - new Date(a.dateFrom).getTime());
      return values;
    case currentValue === SortingValues.time:
      values = points.sort((a, b) => dayjs(b.dateTo).diff(dayjs(b.dateFrom)) - dayjs(a.dateTo).diff(dayjs(a.dateFrom)));
      return values;
    default:
    return points;
  }
}

export const getFilteringValues = (points: Point[], currentValue: string) => {
  let values: Point[] = [];
  switch(true) {
    case currentValue === FilterValues.everything:
      return points;
    case currentValue === FilterValues.future:
      values = points.filter((point) => new Date(point.dateFrom) > new Date());
      return values;
    case currentValue === FilterValues.past:
      values = points.filter((point) => new Date(point.dateFrom) < new Date());
      return values;
    default:
    return points;
  }
}

export const getRandomString = () => {
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  return Array.from(characters).map((el) => el += characters.charAt(Math.floor(Math.random() * characters.length)))
}
