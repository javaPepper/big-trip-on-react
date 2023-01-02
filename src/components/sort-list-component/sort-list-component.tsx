import { SortingValues } from "../../const";
import SortComponent from "../sort-component/sort-component";

function SortListComponent() {
  return (
    <>
      {Object.values(SortingValues).map((value) => (
        <SortComponent
          key={value}
          sortValue={value.toLowerCase()}
          isDay={
            value === SortingValues.day
          }
          isDisabled={
            value === SortingValues.event || value === SortingValues.offers
          }
        />
      ))}
    </>
  );
}

export default SortListComponent;
