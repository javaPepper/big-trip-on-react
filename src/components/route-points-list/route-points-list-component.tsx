import { points } from "../../mock/points";
import RoutePointComponent from "../route-point-component/route-point-component";
import { useAppSelector } from "../../hooks";
import { getFilteringValues, getSortingValues } from "../../utils";

function RoutePointsList() {
  const id = useAppSelector((state) => state.activeId);
  let sortedPoints = [...points].sort((a, b) => new Date(b.dateFrom).getTime() - new Date(a.dateFrom).getTime());
  const sortValue = useAppSelector((state) => state.sortValue);
  sortedPoints = getSortingValues([...sortedPoints], sortValue);
  const filterValue = useAppSelector((state) => state.filterValue);
  const filteredPoints = getFilteringValues([...sortedPoints], filterValue);
  const isFiltered = useAppSelector((state) => state.isClickedFilter);

  return (
    <>
      {(isFiltered ? filteredPoints : sortedPoints).map((point) => (
        <RoutePointComponent
          point={point}
          key={point.id}
          isActive={id === point.id}
        />
      ))}
    </>
  );
}

export default RoutePointsList;
