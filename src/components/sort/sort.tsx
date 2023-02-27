import { useAppDispatch } from '../../hooks';
import { setSortingValue } from '../../store/actions';

type SortComponentProps = {
  sortValue: string;
  isDisabled: boolean;
  isValue: boolean;
};

function SortComponent({ sortValue, isDisabled, isValue }: SortComponentProps) {
  const dispatch = useAppDispatch();

  const handleSortingValues = (value: string) => {
    if (value) {
      dispatch(setSortingValue(value));
    }
  };

  return (
    <div className={`trip-sort__item  trip-sort__item--${sortValue}`}>
      <input
        id={`sort-${sortValue}`}
        className="trip-sort__input  visually-hidden"
        type="radio"
        name="trip-sort"
        defaultValue={`sort-${sortValue}`}
        disabled={isDisabled}
        defaultChecked={isValue}
        onChange={(evt) => {
          const { value } = evt.currentTarget;
          handleSortingValues(value);
        }}
      />
      <label className="trip-sort__btn" htmlFor={`sort-${sortValue}`}>
        {sortValue}
      </label>
    </div>
  );
}

export default SortComponent;
