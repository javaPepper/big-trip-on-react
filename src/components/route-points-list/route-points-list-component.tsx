import { points } from "../../mock/points";
import RoutePointComponent from "../route-point-component/route-point-component";
import { useAppSelector } from "../../hooks";

function RoutePointsList() {
const id = useAppSelector((state) => state.activeId);

  return (
    <>
      {points.map((point) => (
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
