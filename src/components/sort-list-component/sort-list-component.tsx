import { SortRenderValues } from "../../const";
import SortComponent from "../sort-component/sort-component";

function SortListComponent() {
  return (
    <>
      {Object.values(SortRenderValues).map((value) => (
        <SortComponent
          key={value}
          sortValue={value.toLowerCase()}
          isDay={
            value === SortRenderValues.day
          }
          isDisabled={
            value === SortRenderValues.event || value === SortRenderValues.offers
          }
        />
      ))}
    </>
  );
}

export default SortListComponent;
