import { FilterValues } from "../../const";
import FilterComponent from "../filter-component/filter-component";

function FilterList() {
  return (
    <>
      {Object.values(FilterValues).map((el) => (
        <FilterComponent
          value={el}
          key={el}
          isEverything={el === FilterValues.everything}
        />
      ))}
    </>
  );
}

export default FilterList;
