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
      values = points.sort((a, b) => a.basePrice - b.basePrice);
      return values;
    case currentValue === SortingValues.day:
      values = points.sort((a, b) => new Date(a.dateFrom).getTime() - new Date(b.dateFrom).getTime());
      return values;
    case currentValue === SortingValues.time:
      values = points.sort((a, b) => new Date(a.dateFrom).getMinutes() - new Date(b.dateFrom).getMinutes());
      return values;
    default:
    return points;
  }
}
