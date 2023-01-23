import { FilterValues } from "../../const";
import FilterComponent from "../filter-component/filter-component";
import { useAppSelector } from "../../hooks";

function FilterList() {
  const isClickedFilter = useAppSelector((state) => state.isClickedFilter);

  return (
    <>
      {Object.values(FilterValues).map((el) => (
        <FilterComponent
          value={el}
          key={el}
          isEverything={el === FilterValues.everything}
          isClickedValue={isClickedFilter}
        />
      ))}
    </>
  );
}

export default FilterList;
