import dayjs from "dayjs";
import { EmptyValues, FilterValues, SortingValues } from "../const";
import { Destination } from "../types/destination";
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
      values = points.sort((a, b) => b.base_price - a.base_price);
      return values;
    case currentValue === SortingValues.day:
      values = points.sort((a, b) => new Date(b.date_from).getTime() - new Date(a.date_from).getTime());
      return values;
    case currentValue === SortingValues.time:
      values = points.sort((a, b) => dayjs(b.date_to).diff(dayjs(b.date_from)) - dayjs(a.date_to).diff(dayjs(a.date_from)));
      return values;
    default:
    return points;
  }
};

export const getFilteringValues = (points: Point[], currentValue: string) => {
  let values: Point[] = [];
  switch(true) {
    case currentValue === FilterValues.everything:
      return points;
    case currentValue === FilterValues.future:
      values = points.filter((point) => new Date(point.date_from) > new Date());
      return values;
    case currentValue === FilterValues.past:
      values = points.filter((point) => new Date(point.date_from) < new Date());
      return values;
    default:
    return points;
  }
};

export const getDestinationsNames = (destinations: Destination[]) => {
  let destinationsNames: string[] = [];
  return () => {
    destinations.map((el) => {
      const {name} = el;
      destinationsNames.push(name);
    })
    return destinationsNames;
  }
};
