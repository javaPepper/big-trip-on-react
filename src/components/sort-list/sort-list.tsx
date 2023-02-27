import { SortRenderValues } from '../../const';
import SortComponent from '../sort/sort';

function SortListComponent() {
  return (
    <>
      {Object.values(SortRenderValues).map((value) => (
        <SortComponent
          key={value}
          sortValue={value.toLowerCase()}
          isValue={value === SortRenderValues.day}
          isDisabled={!value}
        />
      ))}
    </>
  );
}

export default SortListComponent;
