import { points } from "../../mock/points";
import RoutePointComponent from "../route-point-component/route-point-component";

function RoutePointsList() {

  return (
    <>
      {points.map((point) => (
        <RoutePointComponent
          point={point}
          key={point.id}
        />
      ))}
    </>
  );
}

export default RoutePointsList;
