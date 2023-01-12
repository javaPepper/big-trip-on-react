import HeaderComponent from "../../components/header/header";
import AddNewPointComponent from "../../components/add-new-point/add-new-point-component";
import RoutePointsList from "../../components/route-points-list/route-points-list-component";
import SortListComponent from "../../components/sort-list-component/sort-list-component";
import { useAppSelector } from "../../hooks";
import { points } from "../../mock/points";
<<<<<<< HEAD
import MainPageEmpty from "../main-page-empty/main-page-empty";
=======
>>>>>>> f038e49089ab420fde43b4517460c5d65673e848

function MainPage() {
  const isClickedHeader = useAppSelector((state) => state.isClickedHeader);
  const isClickedEdit = useAppSelector((state) => state.isClickedEdit);

  return (
    <>
      <HeaderComponent />
      <main className="page-body__page-main  page-main">
        <div className="page-body__container">
          <section className="trip-events">
            <h2 className="visually-hidden">Trip events</h2>
<<<<<<< HEAD
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
                  {!isClickedEdit && isClickedHeader && (
                    <AddNewPointComponent point={points[0]} />
                  )}
                  {<RoutePointsList />}
                </ul>
              </>
            ) : (
              <MainPageEmpty />
            )}
=======
            <form
              className="trip-events__trip-sort  trip-sort"
              action="#"
              method="get"
            >
              <SortListComponent />
            </form>
            <ul className="trip-events__list">
              {!isClickedEdit && isClickedHeader && (
                <AddNewPointComponent point={points[0]} />
              )}
              {<RoutePointsList />}
            </ul>
>>>>>>> f038e49089ab420fde43b4517460c5d65673e848
          </section>
        </div>
      </main>
    </>
  );
}

export default MainPage;
