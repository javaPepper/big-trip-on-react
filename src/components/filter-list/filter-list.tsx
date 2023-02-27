import { FilterValues } from '../../const';
import FilterComponent from '../filter/filter';

function FilterList() {

  return (
    <>
      {Object.values(FilterValues).map((el) => (
        <FilterComponent
          filterValue={el}
          key={el}
          isEverything={el === FilterValues.everything}
        />
      ))}
    </>
  );
}

export default FilterList;
