import { SortingValues } from "../../const";

type SortComponentProps = {
  sortValue: string[];
}

function SortComponent({sortValue}: SortComponentProps) {
  return(
    <>
 {sortValue.map((value) =>
 <div className={`trip-sort__item  trip-sort__item--${value.toLowerCase()}`} key={value}>
  {(value === SortingValues.event || value === SortingValues.offers)
   ?
  <input id={`sort-${value.toLowerCase()}`} className="trip-sort__input  visually-hidden" type="radio" name="trip-sort" defaultValue={`sort-${value.toLowerCase()}`} disabled />
   :
  (value === SortingValues.day) && <input id={`sort-${value.toLowerCase()}`} className="trip-sort__input  visually-hidden" type="radio" name="trip-sort" defaultValue={`sort-${value.toLowerCase()}`} checked />
  }
  <label className="trip-sort__btn" htmlFor={`sort-${value.toLowerCase()}`}>{value}</label></div>
 )}
  </>
  )
}

export default SortComponent;
