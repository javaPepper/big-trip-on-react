import { EmptyValues, FilterValues } from "../const";

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
