import { useAppDispatch, useAppSelector } from '../../hooks';
import { setClickedFilter, setFilterValue } from '../../store/actions';

type FilterComponentProps = {
  filterValue: string;
  isEverything: boolean;
}

function FilterComponent({ filterValue, isEverything }: FilterComponentProps) {
  const dispatch = useAppDispatch();
  const isClickedFilter = useAppSelector((state) => state.isClickedFilter);

  return (
    <div className="trip-filters__filter">
      <input
        id={`filter-${filterValue}`}
        className="trip-filters__filter-input  visually-hidden"
        type="radio"
        name="trip-filter"
        value={filterValue}
        defaultChecked={isEverything || isClickedFilter}
        onChange={(evt) => {
          const { value } = evt.currentTarget;
          dispatch(setFilterValue(value));
          dispatch(setClickedFilter(true));
        }}
      />
      <label className="trip-filters__filter-label" htmlFor={`filter-${filterValue}`}>
        {filterValue}
      </label>
    </div>
  );
}

export default FilterComponent;
