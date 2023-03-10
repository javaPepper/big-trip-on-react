import HeaderComponent from "../../components/header/header";
import AddNewPointComponent from "../../components/add-new-point/add-new-point-component";
import RoutePointsList from "../../components/route-points-list/route-points-list-component";
import SortListComponent from "../../components/sort-list-component/sort-list-component";
import { useAppSelector } from "../../hooks";
import MainPageEmpty from "../main-page-empty/main-page-empty";

function MainPage() {
  const isClickedHeader = useAppSelector((state) => state.isClickedHeader);
  const isClickedEdit = useAppSelector((state) => state.isClickedEdit);
  const points = useAppSelector((state) => state.points);
  const totalPrice = useAppSelector((state) => state.pointsPrice);

  return (
    <>
      <HeaderComponent totalPrice={totalPrice}/>
      <main className="page-body__page-main  page-main">
        <div className="page-body__container">
          <section className="trip-events">
            <h2 className="visually-hidden">Trip events</h2>
            {points.length > 0 ? (
              <>
                <form
                  className="trip-events__trip-sort  trip-sort"
                  action="#"
                  method="get"
                >
                  <SortListComponent />
                </form>
                <ul className="trip-events__list">
                  {((!isClickedEdit && isClickedHeader) || isClickedHeader) &&
                    <AddNewPointComponent />
                  }
                  {<RoutePointsList />}
                </ul>
              </>
            ) : (
              <MainPageEmpty />
            )}
          </section>
        </div>
      </main>
    </>
  );
}

export default MainPage;
