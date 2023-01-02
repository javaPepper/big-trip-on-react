type SortComponentProps = {
  sortValue: string;
  isDisabled: boolean;
  isDay: boolean;
};

function SortComponent({ sortValue, isDisabled, isDay }: SortComponentProps) {
  return (
    <div className={`trip-sort__item  trip-sort__item--${sortValue}`}>
      <input
        id={`sort-${sortValue}`}
        className="trip-sort__input  visually-hidden"
        type="radio"
        name="trip-sort"
        defaultValue={`sort-${sortValue}`}
        disabled={isDisabled}
        defaultChecked={isDay}
      />
      <label className="trip-sort__btn" htmlFor={`sort-${sortValue}`}>
        {sortValue}
      </label>
    </div>
  );
}

export default SortComponent;
