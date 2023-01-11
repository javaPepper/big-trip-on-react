import { useAppDispatch } from "../../hooks";
import { setFilterValue } from "../../store/actions";

type FilterComponentProps = {
  value: string;
  isEverything: boolean;
}

function FilterComponent({value, isEverything }: FilterComponentProps) {
  const dispatch = useAppDispatch();
  return (
    <div className="trip-filters__filter">
      <input
        id={`filter-${value}`}
        className="trip-filters__filter-input  visually-hidden"
        type="radio"
        name="trip-filter"
        defaultValue={value}
        defaultChecked={isEverything}
        onChange={(evt) => {
          dispatch(setFilterValue(evt.currentTarget.value));
        }}
      />
      <label className="trip-filters__filter-label" htmlFor={`filter-${value}`}>
        {value}
      </label>
    </div>
  );
}

export default FilterComponent;
