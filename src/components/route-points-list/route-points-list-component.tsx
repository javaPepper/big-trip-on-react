import { points } from "../../mock/points";
import RoutePointComponent from "../route-point-component/route-point-component";
import { useAppSelector } from "../../hooks";
import { getSortingValues } from "../../utils";

function RoutePointsList() {
  const id = useAppSelector((state) => state.activeId);
  let sortedPoints = [...points].sort((a, b) => new Date(b.dateFrom).getTime() - new Date(a.dateFrom).getTime());
  const currentValue = useAppSelector((state) => state.sortValue);
  sortedPoints = getSortingValues([...sortedPoints], currentValue)

  return (
    <>
      {sortedPoints.map((point) => (
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
