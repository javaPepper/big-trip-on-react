import HeaderComponent from '../../components/header/header';
import AddNewPointComponent from '../../components/add-new-point/add-new-point';
import RoutePointsList from '../../components/route-points-list/route-points-list';
import SortListComponent from '../../components/sort-list/sort-list';
import { useAppSelector } from '../../hooks';
import MainPageEmpty from '../main-page-empty/main-page-empty';
import { useMemo } from 'react';

function MainPage() {
  const isClickedAddNewButton = useAppSelector((state) => state.isClickedAddNewButton);
  const points = useAppSelector((state) => state.points);
  const prices = useAppSelector((state) => state.pointsPrice);
  const offers = useAppSelector((state) => state.offers);

  const offersPrices = offers.reduce((arr, current) => {
    const currentOfferPrice = current.offers.reduce((acc, offerPrice) => acc + offerPrice.price, 0);
    return arr + currentOfferPrice;
  }, 0);

  const totalPrice = useMemo(() => prices + offersPrices, [prices, offersPrices]);

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
                  {isClickedAddNewButton && <AddNewPointComponent/>}
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
